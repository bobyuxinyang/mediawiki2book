
```
cd mediawiki2book &&  npm i 
```

```
cd lib && npm start
```

### 一点儿坑

#### 关于爬虫

1. 爬虫本身的逻辑是从Kibana的页面中爬取ES的数据，爬的接口的条件中，只有title字段是可以被传递，时间字段没有修改，在代码的TODO中已标注

2. 目前爬虫的频率是1000ms之后，从主站拉去，防止压力过大

3. 目前爬取数据的时候，ES提供的Filter无法精确匹配（文档没查到相关说明），提供的数据比较多，解决方案思路比较清晰，换成拼接的地址`main.xxx/xxxx`无多级路径，wiki都是自命名，相对比较容易，可以换成Puppeteer来抓取页面内容，还要啥Kibana爬虫。。

#### 关于 file.sh

1. 脚本的主要能力是用来解压 images 文件，给转换pdf提供图片资源（准确的说是所有资源），解决的主要问题是把多层级的目录扁平化，使用方式：
```
    sodu chmod -R 777 file.sh //授权
    ./file.sh $src $dest //都是绝对地址
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

