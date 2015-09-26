# 已知问题 #

<font color='red'><b>注意：这里不是提交程序BUG的地方，不要在留言处写任何与这里列出的问题无关的内容，否则一律删除</b></font>

下面是一些 **已知的但目前未查明原因或无法从程序方面解决** 的问题，所提到的浏览器，如无特别指明，都是指其最新版本

目录
  * [Firefox扩展](KnownIssues#Firefox.md)
  * [Greasemonkey脚本](KnownIssues#Greasemonkey.md)
  * [Chrome扩展](KnownIssues#Chrome.md)
  * [Safari扩展](KnownIssues#Safari.md)
  * [Opera用户脚本/扩展](KnownIssues#Opera.md)

## Firefox ##
  1. 在Firefox 4.x上使用的时候，3.3.0及以上版本的改造器，会在导航栏生成两个“改造”项

## Greasemonkey ##
> 暂无

## Chrome ##
  1. 下载相册图片时，部分/全部图片无法查看，实际下载的是出错信息网页。此问题是Chrome 4.x版本的BUG，请升级到更高版本。如果一定要用4.x版，请按照页面上的提示，等待标签页中的所有图片都显示完毕后再保存页面。

## Safari ##
  1. Safari浏览器可能无法自动更新扩展。在Safari的Windows版本上观察到了这一现象。Safari在读取扩展升级文件时，可能实际读取的是以前缓存的文件，无法得到最新的版本号，从而认为不存在更新。解决方法是手动清除Safari浏览器缓存，也可以停用高速缓存功能。
  1. Safari 5.1.x 版的扩展机制存在问题，会导致改造器中部分需要读取其他页面数据的功能失效（比如提示登录信息、显示大图等）。<font color='red'>3.3.1.459版的改造器已经做了一些处理，但不能完全避免此问题</font>

## Opera ##
  1. Opera的用户脚本本身不支持跨域的XHR。目前使用了一个变通的方法，这个方法对于某些版本的Opera（比如10.60.6386和11.60）存在一些问题
  1. Opera用户脚本在检查更新时，对于某些地址（如：http://xiaonei-reformer.googlecode.com/files/45836.meta.js ），会弹出一个文件下载询问窗口。这时需要手动点击打开按钮。如果点击其他按钮，会造成程序执行异常。