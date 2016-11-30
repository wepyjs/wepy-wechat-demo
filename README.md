# wepy-wechat-demo


wepy仿微信聊天界面，数据来自mock数据，支持聊天，自动回复等，聊天记录存储在本地storage。


![wepy](https://cloud.githubusercontent.com/assets/2182004/20709814/5d84db68-b672-11e6-8576-8f489e02dc4b.gif)

## 体验步骤
### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
npm install wepy-cli -g
```

### 2. 下载源代码
```bash
git clone git@github.com:wepyjs/wepy-wechat-demo.git
```

### 3. 安装开发依赖
```bash
npm install
```

### 4. 编译源代码
```bash
wepy build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行出现如下错误。**
![qq 20161129203744](https://cloud.githubusercontent.com/assets/2182004/20710080/bfe6d6b6-b673-11e6-8837-07d0c2fb6953.png)
