# parse_html_by_config

根据数据配置，解析HTML，返回相应的数据


### 示例

比如需要从 `http://www.qiushibaike.com/textnew/` 页面，需要获取如下格式的数据：
``` javascript
let conf = [{
	author: {

		author_img: ..., 
		author_name: ...
	}, 
	content: ....
}, [
	...
]];
```

那么对应的配置为：
```
let conf = [{
	"_parent": ".article",

	"author": {
		"_parent": ".author", 

		"author_img": {
			"_selector": "a:eq(0) img", 
			"_fn": "attr", 
			"_param": "src"
		}, 
		"author_name": "a:eq(1) h2"
	}, 
	"content": ".content span"
}];
```


模块的主题就是一个函数，使用该函数在浏览器的控制台执行：
```
let conf = [{
	"_parent": ".article",

	"author": {
		"_parent": ".author", 

		"author_img": {
			"_selector": "a:eq(0) img", 
			"_fn": "attr", 
			"_param": "src"
		}, 
		"author_name": "a:eq(1) h2"
	}, 
	"content": ".content span"
}];

// 假如函数名字为： parseDataByConf
parseDataByConf($(document.body), conf, []);

```

函数输出数据为：

```
[{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/1599/15993223/medium/20141214225750.jpg","author_name":"飞天QQ猪"},"content":"高中时同宿舍一姑娘 胸上有几块青紫色的痕迹 她跟我们说是睡觉硌的 我居然信了"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3149/31495449/medium/20160404144203.jpg","author_name":"憨豆先生不太逗"},"content":"师父前天给我介绍个徒弟，说是他的表弟要我务必收下。<br>这是前进.后退.转大臂……<br>徒弟:这是什么？还没等我回答他就自己动了一下，塔吊正在运转呢...咣当一下就停了，巨大的机身终于在晃荡一分钟后静止了，差点没把我俩吓尿...<br>我声音我颤抖的对徒弟说:你是师父专门派来卧底的吧！当年我也是差点要了师父的小命……"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/1126/11264066/medium/20140724153601.jpg","author_name":"づ也许≈"},"content":"感冒了 不舒服。<br>想起有人说过\"拉肚子 多喝冷水 就好了\"<br>想着这是以毒攻毒 见效快。<br>举一反三 作死的自己 昨个用凉水 洗了下头，感冒确实好点了 就是好像有点发烧了……"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3305/33057989/medium/2016120316472037.JPEG","author_name":"你说路遥不要害怕"},"content":"昨天做梦梦到了夏天，天气特别热，空调坏了，风扇还不转，我竟然和两个二货朋友在健身房，还裹着厚棉被，然后就被热醒了[抠鼻][抠鼻][抠鼻]<br>妈蛋，宿舍暖气真不错，醒来喝了一瓶水继续睡[调皮][调皮][调皮]"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3156/31564090/medium/20160407095628.jpg","author_name":"自由惯了，褚科"},"content":"今天保险推销员给我打电话问我出行是坐公交车，飞机，还是轮船？我说你以后再不要打电话了，我都坐上轮椅了！保险推销员：嘟嘟嘟………"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/2237/22371693/medium/20150302105519.jpg","author_name":"匆匆岁月愁"},"content":"昨晚吃过晚饭和媳妇儿出去散步，她一时性性起唱起了歌:我能想到最浪漫的事，就是和你一起慢慢变老（听的我心花路放滴），一路上收藏点点滴滴的欢笑，留到以后坐着轮椅慢慢聊！（等等...哪里不对啊）。媳妇儿，你是不是年轻时候坐车不够，老了想继续坐呢？行行行，你自己坐轮椅去吧。这样的媳妇儿求各位糗友快带走带走"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/1674/16749385/medium/2016101709394951.JPEG","author_name":"王八与蛋"},"content":"妹纸想买只狗狗来养，但是不知道该如何挑选狗狗，我让她去之前多吃点红薯，她追问原因。我说：“吃红薯是为了挑狗时放个屁，如果狗狗竖起耳朵并有吠叫的反应，那就是一只身体状况良好的狗狗。可以考虑饲养。”然后妹纸吐槽说：“你不是有这种情况么？”嗯？她是在暗示我么？"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3166/31662311/medium/20160423010816.jpg","author_name":"暴风雨123"},"content":"说个昨晚的事：昨晚请同事吃饭（有男有女）。有一同事喝高了，拍着旁边的女同事说：信不信我一个月泡到你？女同事回他：不信！lz在旁边悠悠补一句：人家妹仔是说，她哪等得了你一个月时间啊。被妹仔一杯啤酒倒头上！怪我咯？？？"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/2843/28437800/medium/2016120719174024.JPEG","author_name":"【星空】白月光"},"content":"出差回来胃疼，下火车后寻思先去社区医院开点药。拦着出租后司机说不知道地址，让我指路。<br>凭记忆指挥着司机怎么走，二十分钟司机停车了：闺女，你重新打个车吧？<br>我恼了：咋滴？还没到就想甩了我?<br>司机憋着笑，指着窗外火车站的钟楼：不甩不成啊！<br>我……(⊙o⊙)…"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3110/31101672/medium/20160329160130.jpg","author_name":"心晴-----"},"content":"一漂亮妹子应聘<br>——割割割——<br>“在深入了解你的具体情况后啊，觉得你并不符合我们公司的要求，对不起。”<br>“那好吧。。。(⊙…⊙)”<br>妹子转身要走<br>“等一下，可以给我看看你的笔吗？”<br>“怎么是腥的？”<br>“不可能，我已经洗过了呀！”<br>“你被录用了！”<br>“(✪ω✪)”"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3102/31029126/medium/201608132105562.JPEG","author_name":"Chernov"},"content":"我们班有一妹子的叫段练。一天，我们班一哥们因为忙着打球，结果吃到了。班主任对那哥们说，同学啊，你爱锻练是好事啊，但是因为锻练耽误学习就不好了。。。全班肃静十秒钟，然后这个梗玩了两个多月"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/2604/26045258/medium/20160315094953.jpg","author_name":"煎饼+大葱"},"content":"今早，看见老婆的一个指甲做得好特殊，红里透着黑，黑里夹着紫，紫里又有点蓝。我就好奇的问:在哪家美甲店做的，很奇特的颜色？老婆没好气：昨天在办公室被门夹的！！"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3149/31495449/medium/20160404144203.jpg","author_name":"憨豆先生不太逗"},"content":":哥，商量点事呗，借我一千块钱<br>:从来都是我找别人借钱，找我借钱的你还是头一个<br>:这么说我还是第一个破处的人了？<br>三年后...:兄弟，借你的钱啥时候还？<br>:我还以为你会像我一样给忘了<br>:唉！！第一次总是让人难忘..."},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/957/9574587/medium/20151217063639.jpg","author_name":"戴口罩亲吻"},"content":"就刚刚，我出差到深圳客户处，约定时间太早！就在一个肠粉店吃了个肠粉！然后就一直坐在那！老板娘隔几分钟看我一下！隔几分钟看我一下！隔几分钟看我一下！最后实在忍不住跑过来说，靓仔，你裤链没拉，没拉，拉"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/1945/19459467/medium/20150202224536.jpg","author_name":"日月半香"},"content":"lz男，93年的，单身两年了，现在都不敢在家待太久，亲戚家也一样，，，，都懂的，，又快过年了，都没勇气踏上回家的路了"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3059/30596194/medium/2016102407373420.JPEG","author_name":"月月★不聊不约"},"content":"就刚刚，优酷视频看到有个妹子说自己男票比较斯文，然后自己就跟男票说“咱平时斯文点没事儿，但啪啪的时候能不能粗暴点，你可以骂我，这样比较有情趣。”(应该在这割……)   后来妹子的男票经常一边啪啪啪，一边痛斥XXX，你是不是傻！你是不是傻！！╭(๑¯ํ ¯ํ๑)╮我到现在都还在脑补那个场景……"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3189/31891444/medium/20160603101650.jpg","author_name":"你爹打了你一巴掌"},"content":"虽然入糗百没多久，但是还是感觉有些人还是很有分寸的，并不像有些没素质的人管你三七二十一往死里喷！"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/2849/28496344/medium/20150518213535.jpg","author_name":"马良神猪"},"content":"今天老师讲课讲“安全”这个词，他说“安全”两个字都是在房子下，这样才是安全。。。可是自从他这么解释后，我再看到“安全”这个词的时候，咋有种“隔壁老王”的感觉呢！！！"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/3210/32105526/medium/2016111216424097.JPEG","author_name":"一笑天荒"},"content":"现在这社会咋了：小赵刚交女朋友，被来他家偷东西的小偷发现了，结果小偷勒索了他们200块钱，大摇大摆的走了"},{"author":{"author_img":"http://pic.qiushibaike.com/system/avtnew/921/9214729/medium/20160713070627.jpg","author_name":"芊言……"},"content":"放学后，侄子说：今天老师表扬我啦，说我举手积极。每次举手，我都举的特别高，甚至站起来举手。。。<br>我哥乐的拍着侄子的肩膀说：虎父无犬子，和我小时一样。哈哈哈。。。<br>和我哥小学同班的嫂子说：你爸确实每次都举手。别人都坐的笔直，把手举的老高。就你爸趴在桌子上，手举到耳朵那儿，又像举手又像捂脸。。。"}]
```
