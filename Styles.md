**首先声明：所有这些自定义页面样式仅仅对你个人生效，在其他人访问你的页面时看到的仍然为原始页面**

<font color='red'>将以下列出的页面样式复制粘贴到改造器中“改造界面”->"自定义页面样式"下的编辑框中</font>


## 不显示导航栏上的logo ##
```
#logo2{display:none}
```

## 隐藏首页左侧边栏上不能删除的应用 ##
```
#appsItem_95003{display:none}   /* 公共主页 */
#appsItem_101644{display:none}  /* 糯米网团购 */
#appsItem_120019{display:none}  /* 位置 */
#appsItem_132844{display:none}  /* 读书 */
#appsItem_141879{display:none}  /* 文档 */
#appsItem_142871{display:none}  /* 视频 */
#appsItem_161719{display:none}  /* 家庭空间 */
.apps-item a[href^='http://app.']{display:none !important}  /* 应用中心 */
.apps-item a[href^='http://game.']{display:none !important}  /* 网页游戏 */
.nav-item a[href^='http://class.']{display:none !important}    /* 校友录 */
#appsItem_45,.apps-item a[href^='http://status.']{display:none !important}  /* 状态 */
#appsItem_166617,.nav-item a[href^='http://xiaozu.']{display:none !important}   /* 小组 */
#appsItem_166616,.nav-item a[href^='http://topic.']{display:none !important}    /* 小站 */
#appsItem_166614,.nav-item a[href^='http://music.']{display:none !important}    /* 音乐 */
```


## 首页皮肤 ##
在一个等级达到11级的帐户，使用首页换肤功能，选择一个皮肤进行预览后，打开浏览器的页面控制台（Firefox按Ctrl+Shift+K，Chrome及相关修改版本按Ctrl+Shift+J，Opera按Ctrl+Shift+I选择“控制台”，Safari按Ctrl+Alt+C，傲游3按F12选择“控制台”，搜狗在高速模式下鼠标右键点“审查元素”再选择“Console”）
```
document.documentElement.textContent=("body.layout_home3cols "+document.querySelector("#hometpl_style style").textContent.replace(/\/\*.*?\*\//g,"").replace(/}(?=[^$])/g,"}body.layout_home3cols ")).replace("body.layout_home3cols html","html").replace("body.layout_home3cols body","body.layout_home3cols")
```

页面上将会显示出皮肤的页面样式，将其复制粘贴到改造器中自定义页面样式功能下的编辑框中，点击确定按钮后即可生效。

<font color='red'>注意：</font>
  1. 这只是针对**首页换肤**功能，对VIP会员的**主页皮肤**无效
  1. 如果启用了“去除页面模板”功能，在部分版本中会导致首页换肤功能无法使用。可暂时将其禁用。去除模板功能不会影响到自定义页面样式功能
  1. 由于首页换肤本身只对原始宽度的导航栏提供了皮肤图片，如果你同时启用了加宽导航栏功能，导航栏会比较难看


下面是“雪花”主题的例子（经换行处理过，实际操作中可以不换行）
### 雪花 ###
```
.menu-dropdown-border {border-color:#CEE1EE;}
#navMessage span a , #navMessage b , #navMessage i em{background:url(http://s.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/nav-message4.png) no-repeat; }
#navMessage i em{background-position: -2px -83px; _background-position:-28px -83px;}
#navMessage .remind b{background-position:-55px -59px;}
#navMessage .remind-hover b{background-position:-81px -59px;}
#navMessage .apply b{background-position:-52px -3px;}
#navMessage .apply-hover b{background-position:-78px -3px;}
#navMessage .notice b{background-position:-55px -30px;}
#navMessage .notice-hover b{background-position:-81px -30px;}
#navMessage .remind a{background-position:-1px -59px;}
#navMessage .remind-click a{background-position:-28px -59px;}
#navMessage .apply a{background-position:0 -3px;}
#navMessage .apply-click a{background-position:-26px -3px;}
#navMessage .notice a{background-position:-1px -30px;}
#navMessage .notice-click a{background-position:-28px -30px;}
.site-nav #search-input {background-image: url(http://s.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/search_sprite.png) ;background-repeat:no-repeat ;background-position: 0 0 ;}
#navSearch a {background-image: url(http://s.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/search_sprite.png) ;background-repeat:no-repeat ;background-position: -157px -48px ;}
.side-item { border-bottom-color:#CEE1EE;}
.publisher .status-publisher input.submit { border-left-color:#CEE1EE; border-top-color:#CEE1EE; }
.input-button, .input-submit { border-left-color:#CEE1EE; border-top-color:#CEE1EE;}
.menu-dropdown-border { border-color:#CEE1EE;}
 .news-feed a.type-filter:hover, .news-feed-types { border-color:#CEE1EE;}
 .layout_home3cols #sidebar { border-color:#CEE1EE ;}
.statuscmtitem { border-bottom-color:#DEEAF0;}
.site-menu-apps { border-bottom-color:#DEEAF0;}
.site-menu-nav { border-bottom-color:#DEEAF0;}
.element.style { border-bottom-color:#DEEAF0;}
.input-text { border-color:#DEEAF0;}
.site-menu-user-box .user-score { background-color:#DEEAF0; }
ul.richlist.feeds li { border-color:#DEEAF0; }
.show-all { border-color:#DEEAF0;}
.news-feed a.type-filter:hover, .news-feed-types { border-color:#DEEAF1; }
 .navigation .menu-title a:hover { background-color:#40A0E2;}
.menu-dropdown .optionmenu li a:hover { background-color:#40A0E2;}
.news-feed-types a.news-feed-type:hover { background-color:#40A0E2;}
.site-menu-nav .nav-item .item-title:hover { background-color:#F3FBFF;}
 .site-menu-apps .item-title .item-main a:hover { background-color: #F3FBFF; }
 .site-menu-apps .selected .item-main a, .site-menu-apps .selected .item-main a:hover { background-color:#40A0E2 ; }
 .site-menu-nav .nav-item li, .site-menu-nav .nav-item .item-title, .webpager ul.icon li a:visited { background-color:transparent;}
.publisher .status-publisher input.submit { border-right-color:#40A0E2!important; border-bottom-color:#40A0E2!important; }
#navMessage .on{background:#40A0E2;}
#navMessage .click {background-color:#FFFFFF;}
.site-menu-apps .apps-item .item-title:hover { background-color:#F3FBFF; }
.input-button, .input-submit { border-right-color:#40A0E2; border-bottom-color:#40A0E2;}
.publisher .status-publisher input.submit { background-color:#00729A!important;}
.input-button, .input-submit { background-color:#00729A; }
.statuscmtitem { background-color:#F3FBFF;}
.show-all{ background-color:#F3FBFF;}
html {background-image:url(http://a.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/bg1.png);background-repeat : repeat-x;background-position: center top;}
body {background-color: transparent;}
a:link, a:visited , a:hover {color:#00729A;}
.feed-module a:link,.feed-module a:hover,.feed-module a:visited {color:#00729A;}
 .lively-user, a.lively-user:link, a.lively-user:visited, a.lively-user:hover { color:#FF6600;}
.min-cmtbox {background:url(about:blank);}
.layout_home3cols #main { background-image:url(http://a.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/sidebarline.gif); background-position: 0 0;background-repeat: repeat-y;}
.site-nav-wrapper #navBar{background-image: url(http://a.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/bg.png) ;background-position: 0 0;background-repeat:repeat-x;}
.navigation{background-image:url(http://a.xnimg.cn/xnapp/vip/resimg/hometpl/v6/snow/nav_bg.png);background-position: right bottom;background-repeat:repeat;}
.navigation .nav-other{background-image:none}
.navigation .nav-body {background-color:transparent;}
```