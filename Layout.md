<font color='red'>将以下列出的页面样式复制粘贴到改造器中“改造界面”->"调整页面布局"下的编辑框中</font>

将个人主页上留言板移至新鲜事下方
```
body#profile .talk-box>.box >>> .talk-box
```

将个人主页上右边栏的内容移动到左边栏
```
body#profile .extra-side>div >>> .main-side
```