# 浏览器的权限警告 #

[这里](http://developer.chrome.com/extensions/permission_warnings.html)是chrome浏览器官方的扩展开发文档，里面的表格中详细记叙了浏览器提出的权限警告与扩展实际要求的权限间的对应关系。



# 当前版本的权限要求 #

[这里](http://code.google.com/p/xiaonei-reformer/source/browse/trunk/chromium-extension/manifest.json)是最新版本的manifest文件，里面的permissions和optional\_permissions中的内容就是人人网改造器需要的全部权限。其中optional\_permissions中的是运行时可动态授予或撤销的权限。



# 历史上要求过的所有权限 #

人人网改造器的chrome扩展版本从最初到现在要求过的所有权限如下：
  * [tabs](ChromeExtPrivileges#tabs.md)
  * [storage](ChromeExtPrivileges#storage.md)
  * [downloads](ChromeExtPrivileges#downloads.md)
  * http://*.renren.com/
  * ~~http://renren.com/~~
  * ~~https://*.renren.com/~~
  * ~~https://renren.com/~~
  * ~~http://*/~~
  * http://*.rrimg.com/
  * http://*.xnimg.cn/
  * http://*.rrfmn.com/
  * http://*.xnpic.com/



# 各项权限的详细说明 #
## tabs ##
  * 加入版本：[2.3.5.256](http://code.google.com/p/xiaonei-reformer/source/diff?spec=svn125&r=125&format=side&path=/trunk/chromium-extension/manifest.json)
  * 首次发布：2.3.5.256 (20100426)
  * 加入原因：下载相册图片功能需要打开新标签页，并与打开的标签页进行一些交互操作
  * 其他说明：经[确认](http://code.google.com/p/chromium/issues/detail?id=137404)，在较新内核（23+？）的浏览器上述操作不再需要tabs权限，但目前仍然对旧内核版本提供支持。因此还是保留

## storage ##
  * 加入版本：[3.4.4.509](http://code.google.com/p/xiaonei-reformer/source/diff?spec=svn675&r=675&format=side&path=/trunk/chromium-extension/manifest.json)
  * 首次发布：3.4.4.509 (20130113)
  * 加入原因：实验性的支持扩展选项同步机制
  * 其他说明：在3.4.4.511版(20130115发布)中，同步功能被暂时（？）禁用

## downloads ##
  * 加入版本：[3.4.5.518](http://code.google.com/p/xiaonei-reformer/source/diff?spec=svn695&r=695&format=side&path=/trunk/chromium-extension/manifest.json)
  * 首次发布：3.4.5.519 (20130728)
  * 加入原因：下载相册图片功能中实验性的新增直接下载功能

## http://*.renren.com/ ##
  * 加入版本：[0.1.0.1](http://code.google.com/p/xiaonei-reformer/source/diff?path=/trunk/chromium-extension/manifest.json&format=side&r=41&old_path=/trunk/chromium-extension/manifest.json&old=)
  * 首次发布：1.9.99.202 (20100124)
  * 加入原因：没这个权限改造器基本就废了

## http://renren.com/ ##
  * 加入版本：[0.1.0.1](http://code.google.com/p/xiaonei-reformer/source/diff?path=/trunk/chromium-extension/manifest.json&format=side&r=41&old_path=/trunk/chromium-extension/manifest.json&old=)
  * 首次发布：1.9.99.202 (20100124)
  * 加入原因：没这个权限改造器基本就废了
  * 废弃版本：3.4.5.518 (20130728)
  * 废弃原因：只要http://*.renren.com/就够了

## https://*.renren.com/ ##
## https://renren.com/ ##
  * 加入版本：[0.1.0.1](http://code.google.com/p/xiaonei-reformer/source/diff?path=/trunk/chromium-extension/manifest.json&format=side&r=41&old_path=/trunk/chromium-extension/manifest.json&old=)
  * 首次发布：无
  * 加入原因：人人网（校内网？）曾经用过https的登录页面
  * 废弃版本：1.9.99.200
  * 废弃原因：估计人人网没心思再弄https页面，留着白占地方

## http://*/ ##
  * 加入版本：[1.9.99.200](http://code.google.com/p/xiaonei-reformer/source/diff?path=/trunk/chromium-extension/manifest.json&format=side&r=57&old_path=/trunk/chromium-extension/manifest.json&old=51)
  * 首次发布：1.9.99.202 (20100124)
  * 加入原因：为了发ajax请求方便（？）
  * 废弃版本：1.9.99.207
  * 废弃原因：只需要对人人网的页面发ajax请求

## http://*.rrimg.com/ ##
## http://*.xnimg.cn/ ##
## http://*.rrfmn.com/ ##
## http://*.xnpic.com/ ##
  * 加入版本：[3.4.5.518](http://code.google.com/p/xiaonei-reformer/source/diff?path=/trunk/chromium-extension/manifest.json&format=side&r=695&old_path=/trunk/chromium-extension/manifest.json&old=694)
  * 首次发布：3.4.5.519 (20130728)
  * 加入原因：这些都是人人网用来存图片的域名，下载API[需要明确声明欲下载文件的域名](http://developer.chrome.com/extensions/downloads.html#manifest)