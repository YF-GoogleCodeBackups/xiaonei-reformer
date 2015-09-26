由于使用了新的底层框架，从3.2.12.436版开始，人人网改造器不再支持 Firefox 3.6 系列了。如果确实需要使用 Firefox 3.6 系列，有两个选择：

  * 安装Greasemonkey，使用用户脚本版的人人网改造器

  * 自行修改改造器结构，使其使用旧版框架

修改方法如下：

1、下载支持Firefox 3.6.x的[旧版底层框架](http://code.google.com/p/xiaonei-reformer/source/browse/trunk/skeleton-fx3.6.zip)，解压缩出来

2、将[最新的程序脚本](http://code.google.com/p/xiaonei-reformer/source/browse/trunk/xiaonei_reformer.user.js)下载后放入上一步解压出来的content目录中

3、用文本编辑器修改install.rdf文件，将
`<em:version>3.2.11.428</em:version>`中的版本号改成最新的（此步可略过不做）

4、重新用zip格式压缩，并将文件扩展名修改为xpi，然后用Firefox安装即可

<font color='red'>注意：今后发布的人人网改造器4.x版的底层框架会有较大变化，上述方法将不再有效</font>