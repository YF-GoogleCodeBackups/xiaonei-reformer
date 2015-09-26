鉴于有部分使用者（几乎都是Google Chrome用户）不知道如何安装，在此编写了这么一个安装向导。

首先声明：
  * 不要指望它能够在下面目录中未列出的浏览器上正常安装/使用。
  * 如果你怀疑本程序有任何不良行为，请不要安装/自行卸载。

目录
  * [Google Chrome/Chromium](Installation#Google_Chrome/Chromium.md)
  * [Firefox](Installation#Firefox.md)
  * [Safari](Installation#Safari.md)
  * [Opera](Installation#Opera.md)
  * [傲游3浏览器](Installation#Maxthon3.md)
  * [搜狗高速浏览器](Installation#Sogou.md)
  * [其他基于Chromium的浏览器（枫树浏览器/云游浏览器/猎豹浏览器/360极速浏览器等）](Installation#%E5%85%B6%E4%BB%96%E5%9F%BA%E4%BA%8EChromium%E7%9A%84%E6%B5%8F%E8%A7%88%E5%99%A8.md)

# Google Chrome/Chromium #
## 安装浏览器（以Google Chrome为例，我知道用Chromium的用户一般水平都比较高；） ##
推荐到[官方网站](http://www.google.com/chrome)去下载安装程序并运行。这样安装上的是正式版本。并不推荐使用beta、dev甚至daily版，尤其是dev版和daily版。因为其发布目的只是让开发人员测试，本身可能存在很多问题，并不适合一般用户使用。
## 下载/安装扩展程序 ##
安装完Chrome浏览器后，运行它，并到[扩展下载页面](https://chrome.google.com/extensions/detail/bafellppfmjodafekndapfceggodmkfc)去安装扩展。

点击“安装”后过一会儿会弹出下面的询问窗口，点击安装

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c1.jpg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c1.jpg)

安装成功后会有以下提示

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c2.jpg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c2.jpg)

这时到已安装扩展页面会看到

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c4.jpg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c4.jpg)

如果点击“安装”后半天没反应，恭喜你不幸撞墙了。如果你听不懂我在说什么，请自行搜索“什么是G.F.W”。

然后你可以试试直接访问我放在这里的[镜像文件](http://xiaonei-reformer.googlecode.com/files/xiaonei_reformer.crx)，进行安装。如果你不幸到极点，连镜像文件都无法访问，请自行搜索“如何翻墙”并学习实践之。

如果你通过其他方法获得了扩展文件（后缀名是crx），直接将其拖动到Chrome浏览器的扩展程序页面上进行安装

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c5.jpg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c5.jpg)

会有以下提示

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c6.jpg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_c6.jpg)

如果你觉得安全第一，就直接放弃吧。如果你勇敢地选择了继续，就会弹出上面第一个图片所示的询问窗口。


`=================================================================================================================`


# Firefox #
## 安装Firefox ##
请到 http://www.getfirefox.com 去下载最新正式版的Firefox进行安装。如果你当前已经安装了Firefox，请检查其版本。本程序只能在4.0或更高版本的Firefox上使用
## 安装扩展 ##
到[扩展下载页面](http://xiaonei-reformer.googlecode.com/files/xiaonei_reformer-fx.xpi)去下载扩展程序。下载完毕后直接将其拖动到Firefox窗口上即可安装。
## 使用脚本 ##
如果你不想安装扩展，也可以使用Greasemonkey脚本。首先需要安装[Greasemonkey扩展](https://addons.mozilla.org/firefox/addon/748/)，然后到[脚本主页](http://userscripts.org/scripts/show/45836)安装脚本

`=================================================================================================================`


# Safari #
## 安装Safari ##
请到 http://www.apple.com.cn/safari/ 下载最新版Safari进行安装。只有5.0或更高版本的Safari才支持扩展
## 安装扩展 ##
到[扩展下载页面](http://code.google.com/p/xiaonei-reformer/downloads/list)去下载扩展程序。下载后双击文件即可安装


`=================================================================================================================`


# Opera #
## 安装Opera ##
请到 http://www.opera.com/ 下载最新版Opera进行安装。本程序不保证能在10.50以下版本上正常运行
## 安装扩展 ##
Opera 11增加了扩展机制。但是在11.50版之前，都存在一个缺陷，导致人人网改造器无法正常工作。所以请使用11.50或更高版本的Opera

到[扩展下载页面](http://code.google.com/p/xiaonei-reformer/downloads/list)去下载扩展程序。下载后将文件拖动到opera窗口上即可安装

<font color='red'>注意：</font>使用opera下载扩展时，可能会将其识别为zip压缩文件并自动将扩展名改成zip。如果发生此问题请手动将文件扩展名改回oex。另外有个稍微复杂但一劳永逸的方法：在opera的首选项->高级->下载中，编辑mime类型为“application/zip”（如果找不到请取消勾选“隐藏用opera打开的文件类型”）对应的文件扩展名，加上oex，如下图所示：

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_o2.png](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_o2.png)



## 安装用户脚本 ##
<font color='red'>注意：在Opera 11.60版中，下面的跨域请求方法失效。因此不再公开提供用户脚本版下载。请换用Opera扩展版本</font>

<font color='lightgray'>
<ol><li>到<a href='http://code.google.com/p/xiaonei-reformer/downloads/list'>扩展下载页面</a>去下载<a href='http://xiaonei-reformer.googlecode.com/files/opera_crossdomain.zip'>Opera用户脚本跨域支持</a>，将压缩包中的两个文件解压到<a href='http://wiki.operachina.com/UserJS#.E5.85.A8.E5.B1.80.E4.BD.BF.E7.94.A8'>javascript文件夹</a>内。如果不安装Opera用户脚本跨域支持，程序也可以运行，但部分功能将会失效。关于Opera用户脚本跨域支持的相关信息，参考<a href='http://my.opera.com/community/forums/topic.dml?id=155224'>这里</a>。<br>
</li><li>下载Opera用户脚本，将Opera用户脚本同样放置在<a href='http://wiki.operachina.com/UserJS#.E5.85.A8.E5.B1.80.E4.BD.BF.E7.94.A8'>javascript文件夹</a>中<br>
<h2>允许脚本存储</h2>
程序脚本需要在你的机器上存储你所设置的选项，但Opera默认并不允许程序脚本这么做。请在Opera设置（opera:config）里将"User JS Storage Quota"项的值设置为102400。如下图所示。</li></ol>

<img src='http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/installation_o1.png' />

这一步非常重要，如果不修改，脚本将无法正常运行。关于脚本存储的更多信息，参考<a href='http://www.opera.com/docs/userjs/specs/#scriptstorage'>这里</a>。<br>
</font>


`=================================================================================================================`


# Maxthon3 #
## 安装傲游3浏览器 ##
到[官方下载页面](http://www.maxthon.cn/mx3/)去下载最新版傲游3浏览器进行安装
## 安装扩展 ##
用傲游3打开[扩展安装页面](http://extension.maxthon.cn/detail/index.php?view_id=1288)，点击“安装”按钮进行安装



`=================================================================================================================`


# Sogou #
## 安装搜狗高速浏览器 ##
到[官方下载页面](http://ie.sogou.com/)去下载最新版搜狗高速浏览器进行安装
## 安装扩展 ##
下载 [搜狗浏览器专用扩展](http://xiaonei-reformer.googlecode.com/files/xiaonei_reformer-sogou.sext)，双击安装



`=================================================================================================================`


# 其他基于Chromium的浏览器 #
目前已知的基于Chromium且保留了扩展功能的浏览器有枫树浏览器、云游浏览器、猎豹浏览器、世界之窗浏览器极速版、360极速浏览器、115极速浏览器等。
这些浏览器可以直接使用Google Chrome/Chromium的扩展。具体安装方法见[Google Chrome/Chromium部分](Installation#%E4%B8%8B%E8%BD%BD/%E5%AE%89%E8%A3%85%E6%89%A9%E5%B1%95%E7%A8%8B%E5%BA%8F.md)，不再一一叙述