# 你画我猜

## 项目说明

```
  assets      // 资源文件
  components  // 自定义组件库
  demo        // demo-分包(用于个人测试相关功能, 添加常用场景例子), 发布时可移除
    |- components  // 分包中独有的自定义组件
    |- pages       // 分包中的页面
  etc         // 配置项
  login       // 公用登录-分包
  pages       // 主包页面
  utils       // 常用工具类
  wxs         // 常用脚本
  node_modules // 第三方引用库(源代码)  不参与打包
  miniprogram_npm // 第三方库(项目实际使用)  打包时,可移除无引用的文件
  app.js      // 程序入口
  app.json    // 程序配置项
  package.json  // 项目依赖项管理

```

## 项目运行

```
  打开开发工具终端:
  1. 在小程序 package.json 所在的目录中执行命令安装 npm 包：
    npm install

  2. 构建 npm
    点击开发者工具中的菜单栏：工具 --> 构建 npm

  3. 工具--> 项目详情 --> 本地设置 --> 勾选"使用npm构建"

  4. 编译项目

```

## 依赖项

```
  "@vant/weapp": "^1.6.8",   // 有赞UI库
  "dayjs": "^1.10.4",       // 日期格式管理
  "urijs": "^1.19.6",       // 链接编码
  "wemarked": "^1.0.2"      // markdown文档

```
