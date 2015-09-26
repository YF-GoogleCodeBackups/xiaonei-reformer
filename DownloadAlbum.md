目录
  * [选项说明](DownloadAlbum#%E9%80%89%E9%A1%B9%E8%AF%B4%E6%98%8E.md)
  * [操作步骤](DownloadAlbum#%E6%93%8D%E4%BD%9C%E6%AD%A5%E9%AA%A4.md)
  * [常见问题](DownloadAlbum#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.md)
    * [如何让下载的图片按其说明文字命名](DownloadAlbum#1%E3%80%81%E5%A6%82%E4%BD%95%E8%AE%A9%E4%B8%8B%E8%BD%BD%E7%9A%84%E5%9B%BE%E7%89%87%E6%8C%89%E5%85%B6%E8%AF%B4%E6%98%8E%E6%96%87%E5%AD%97%E5%91%BD%E5%90%8D%EF%BC%9F.md)
    * [启用了“相册所有图片在一页中显示”，但下载图片仍然不全](DownloadAlbum#2%E3%80%81%E5%90%AF%E7%94%A8%E4%BA%86%E2%80%9C%E7%9B%B8%E5%86%8C%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87%E5%9C%A8%E4%B8%80%E9%A1%B5%E4%B8%AD%E6%98%BE%E7%A4%BA%E2%80%9D%EF%BC%8C%E4%BD%86%E4%B8%8B.md)
    * [点击“下载当前页图片”后，长时间停留在某个比例不动](DownloadAlbum#3%E3%80%81%E7%82%B9%E5%87%BB%E2%80%9C%E4%B8%8B%E8%BD%BD%E5%BD%93%E5%89%8D%E9%A1%B5%E5%9B%BE%E7%89%87%E2%80%9D%E5%90%8E%EF%BC%8C%E9%95%BF%E6%97%B6%E9%97%B4%E5%81%9C%E7%95%99%E5%9C%A8%E6%9F%90.md)
    * [下载下来的图片顺序不对](DownloadAlbum#4%E3%80%81%E4%B8%8B%E8%BD%BD%E4%B8%8B%E6%9D%A5%E7%9A%84%E5%9B%BE%E7%89%87%E9%A1%BA%E5%BA%8F%E4%B8%8D%E5%AF%B9.md)

# 选项说明 #
如果想下载人人网相册，至少需将选项菜单中“允许下载相册图片”勾选。选项旁有说明图标，鼠标移上去会有基本的说明。请先仔细阅读

带有两个子选项，“仅生成图片链接”和“替换模式”（替换模式是3.2版本新增功能）

  * 仅生成图片链接：默认情况下，将会在页面中显示相册全部图片，这对于一些电脑/网络不太好的用户可能会导致浏览器假死，这种情况下可以考虑启用此功能。
  * 替换模式：主要是方便Google浏览器/Opera用户进行下载。具体应用请继续阅读后面的内容。

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_1.jpeg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_1.jpeg)



# 操作步骤 #

进入相册后，在相册底部会多出一个“下载当前页图片”链接

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_2.jpeg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_2.jpeg)

点击后，会弹出一个新标签页，列出当前页面上显示出的所有图片。

  * Firefox：直接在页面空白处点击鼠标右键，选择页面另存为，在保存类型处选择“网页，全部”。
  * Google浏览器：直接在页面空白处点击鼠标右键，选择另存为，在保存类型处选择“网页，全部内容”。
  * Opera：请先启用“替换模式”功能。点击“下载当前页图片”链接后，选择菜单“文件”->“另存为”，在保存类型处选择“带图像的HTML页面”。但在11.00版之后，此方法失效。
  * Safari：抱歉，真不知道该怎么一次性保存全部图片。
  * 傲游3：傲游3的快捷工具栏中有一项“资源嗅探器”，点击后勾选所有图片进行下载即可
  * 搜狗：请先启用“替换模式”功能。选择菜单“文件”->“保存网页”，或者直接用快捷键Ctrl+S，在保存类型处选择“网页，全部”。

保存完毕后，在你所选择的保存位置里会多出一个html文件和一个文件夹，文件夹中即是全部图片。如果您使用Windows操作系统，注意先不要删除html文件，因为系统会自作聪明的将包含图片的文件夹一并删除

如果启用了“仅生成图片链接”功能，则需要自行用下载工具下载列出的链接


# 常见问题 #
## 1、如何让下载的图片按其说明文字命名？ ##
### Firefox ###
推荐安装[Downthemall!扩展](https://addons.mozilla.org/firefox/addon/201)。安装后在右键菜单会多出一项“Downthemall!”，选择它，在弹出的窗口中有一项“重命名掩码”，将其设置为
```
*text*.*ext*
```
即可，如下图

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_3.jpeg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_3.jpeg)

### Google浏览器 ###
Google浏览器到目前为止，还没有发现有扩展能直接根据图片描述命名下载文件，所以需要使用其他下载工具配合。

先同时启用“仅生成图片链接”和“替换模式”。再去安装[下载助手](https://chrome.google.com/extensions/detail/mfjkgbjaikamkkojmakjclmkianficch)（此扩展已在官方商店下架，但还是可以在网上找到其他的下载地址，比如[这里](http://download.tech.qq.com/soft/1/3/81722/index.shtml)）或[下载工具支持](https://chrome.google.com/webstore/detail/downloaders/lfjamigppmepikjlacjdpgjaiojdjhoj)扩展，这两个扩展都可以调用Flashget或迅雷来下载页面上的内容。

安装扩展后，下载工具支持扩展需要到选项页面指定外部程序，后面以Flashget（快车）为例讲解，下载助手则不需要特别的设置。然后最好重启浏览器。

在点击“下载当前页图片”后的页面中，先点击“切换链接描述”将显示的链接文字换成图片描述，再点击右键，选择用Flashget（快车）来下载所有的链接，如下图

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_4.png](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_4.png)

点击菜单项后会弹出Flashget（快车）的窗口，如下图所示，描述一栏已经中已经是图片描述了，点击下载按钮进行下载。

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_5.png](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_5.png)

当全部文件下载完毕后，转到“完成下载”栏，选择下载的图片（小提示：鼠标先点击第一个文件，再按住Shift键点击最后一个即可选择全部的文件），点击鼠标右键，选择按注释重命名文件即可，如下图所示

![http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_6.jpeg](http://xiaonei-reformer.googlecode.com/svn/trunk/wiki/download_6.jpeg)


### Opera ###
无。只能手动在保存时逐个重命名

### Safari ###
无。只能手动在保存时逐个重命名

## 2、启用了“相册所有图片在一页中显示”，但下载图片仍然不全 ##
这很可能是相册所有图片在一页中显示功能尚未执行完毕所致。此功能需要一定时间去获取图片数据，并逐一添加到当前页面。当网络状况不佳时，会需要较长时间。可以根据点击“下载当前页图片”后新标签页中显示的图片数量判断是否齐全。

## 3、点击“下载当前页图片”后，长时间停留在某个比例不动 ##
这是网络原因导致的。可以刷新页面后重试一下，也可点击“分析中...（XX/YY）”链接，会询问是否中止，选择确定，可以下载已经分析完毕的图片

## 4、下载下来的图片顺序不对 ##
这是因为保存文件时的默认文件名是与人人网服务器上的图片文件名一致的，而人人网服务器上的图片文件名是在上传时随机命名的，并非按照上传顺序命名。要使文件名有序，请在弹出的标签页中选中“在描述前添加图片序号”，并按照 [如何让下载的图片按其说明文字命名](DownloadAlbum#1%E3%80%81%E5%A6%82%E4%BD%95%E8%AE%A9%E4%B8%8B%E8%BD%BD%E7%9A%84%E5%9B%BE%E7%89%87%E6%8C%89%E5%85%B6%E8%AF%B4%E6%98%8E%E6%96%87%E5%AD%97%E5%91%BD%E5%90%8D%EF%BC%9F.md) 中的描述操作