
npm i

``` javascript
cd lib && npm start
```

## Issues

### 环境：(参考readme)
1. unbuntu 18 (mac不行)
2. python，pip3，babel(pip3)
3. pandoc(apt 只能装到1.9） https://pandoc.org/installing.html
4. 编码：export LC_ALL=en_US.UTF-8

### python代码:
1. header.yaml里的font相关暂时注释，没安装需要字体
2. header.yaml里的title，暂时注释，原因未知
3. 如果pandoc安装的1.9，代码里--pdf-engine 要改成 --latex-engine

### mediawiki文件：
* 格式问题，缩进空格须为偶数，正则替换
* 表格- 符号不能在连续两行开头
* 有些情况下'''xxx'''会报错，原因未知
* 本地图片(file:xxx.jpg|100x100)，实际图片名位100x100.xxx.jpg，需正则替换

### 其他
* wiki页面宽度大于a4宽度，换行排班存在问题
* 外链图片