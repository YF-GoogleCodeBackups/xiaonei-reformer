# 自动更新功能介绍 #

## 目录 ##
  * [Greasemonkey脚本](Update#Greasemonkey.md)
  * [Firefox扩展](Update#Firefox.md)
  * [Chrome扩展](Update#Chrome.md)
  * [Safari扩展](Update#Safari.md)
  * [Opera用户脚本](Update#Opera.md)

## Greasemonkey ##
Greasemonkey脚本中有内建的检查更新机制，如下图

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/update_g1.png](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/update_g1.png)

根据检查更新地址的内容来确定是否有新版本。默认为：

检查更新地址：http://userscripts.org/scripts/source/45836.meta.js<br />
脚本下载地址：http://userscripts.org/scripts/source/45836.user.js

如果用户无法直接访问[userscripts.org](http://userscripts.org/)，但可以访问[googlecode.com](http://xiaonei-reformer.googlecode.com/)，可以按以下设置来自动获取更新信息：

检查更新地址：http://xiaonei-reformer.googlecode.com/files/45836.meta.js<br />
脚本下载地址：http://xiaonei-reformer.googlecode.com/files/xiaonei_reformer.min.user.js

如果连googlecode.com都无法访问，可以找一些在线代理网站，将在线代理编码后的地址填入，比如使用在线代理 http://go2-jp2.appspot.com/

## Firefox ##
Firefox浏览器本身有定期检查扩展更新功能，但目前对于本扩展来说，并不建议完全依赖于浏览器本身的自动更新。这是因为本扩展更新相对频繁，而扩展审核周期较长（提交审查后一般要等一周以上），这种情况不利于在一些突发情况下的紧急更新

因此，Firefox扩展仍然建议开启和Greasemonkey脚本一样的内置更新检查机制。

检查更新地址：http://xiaonei-reformer.googlecode.com/files/45836.meta.js<br />
扩展下载地址：http://xiaonei-reformer.googlecode.com/files/xiaonei_reformer-fx.xpi

## Chrome ##
Google Chrome/Chromium浏览器本身会定期检查扩展更新，也可以[通过命令行参数来设置检查更新周期](http://code.google.com/chrome/extensions/autoupdate.html#H2-3)，另外还可以在浏览器中手动检查，如下图

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/update_c1.png](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/update_c1.png)

Google Chrome/Chromium更新服务器的地址是clients2.google.com，在中国大陆的用户可能会无法访问（直接访问http://clients2.google.com出现问题，正常情况下会跳转到Google搜索）。这种情况下可以通过[RSS订阅本站下载页面](http://code.google.com/feeds/p/xiaonei-reformer/downloads/basic)，也可以在下载页面的Chrome扩展项上加星，这样就可以在有更新时得到通知

## Safari ##
Safari浏览器本身有自动检查扩展更新功能，但这个功能可能会出现[问题](KnownIssues#Safari.md)。另外升级需要访问本站。

## Opera ##
Opera用户脚本采用内建的检查更新机制，设置同Greasemonkey脚本。如果自己设置了检查更新地址，可能会遇到一些[问题](KnownIssues#Opera.md)。