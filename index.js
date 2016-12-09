export default (p$, conf = {}, pSelector = []) => {

	let _parent = pSelector.join(' ');

	if( typeof conf === 'string' ) {
		conf = { _selector: conf };
	}

	if( !Array.isArray(conf) ) {

		if( conf.hasOwnProperty('_selector') ) {
			
			let _selector = _parent + ' ' + conf._selector
			let _fn = conf._fn || 'html';
			
			// attr('src') | html | text
			if( conf._param ) {
				return p$.find(_selector)[_fn](conf._param);	
			} else {
				return p$.find(_selector)[_fn]();
			}
		}

		let ret = {};
		let ppSelector = pSelector.concat([conf._parent || '']);
		
		Object.keys(conf).forEach(key => {
			
			if( !/^_/.test(key) ) {
				ret[key] = parseConf(p$, conf[key], ppSelector);
			}
		});

		return ret;
	}

	let isArray = false;
	if( conf instanceof Array ) {

		let itemConf = Object.assign({}, conf[0]);

		let ret = [];

		let hasOtherProp = false;
		Object.keys(itemConf).forEach(key => {
			if( /^[^_]/.test(key) ) {
				hasOtherProp = true;
			}
		});

		// 列表为简单字符串
		if( !hasOtherProp ) {
			
			let _selector = [_parent, itemConf._parent, itemConf._selector].join(' ');

			p$.find(_selector).each(function() {

				let _fn = itemConf._fn || 'html';

				if( itemConf._param ) {
					ret.push($(this)[_fn](itemConf._param));	
				} else {
					ret.push($(this)[_fn]());
				}
			});

			return ret;
		}

		// 列表为复杂对象
		_parent += ' ' + itemConf._parent;
		delete itemConf._parent;

		// 列表必须有 _parent
		p$.find(_parent).each(function(){
			let p$ = $(this);
			ret.push(parseConf(p$, itemConf, []));
		});
		return ret;
	} 
};