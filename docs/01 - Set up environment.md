# 准备开发环境

实际开发中，能使用脚手架工具 [create-react-app](https://github.com/facebook/create-react-app) 就不需要自己手动配置了。

整个项目结构
```bash
config/
dist/
public/
scripts/
src/
.editorconfig
.nvmrc
babel.config.js // babel 7 推荐 babel.config.js 文件
```
项目结构与 `create-react-app` 生成的模板保持一致，并且 webpack 的默认入口是 src/index.js， 默认 build 目录是 dist。这儿就不需要自己发挥聪明才智了。
.editorconfig
.nvmrc 推荐使用 [nvm](https://github.com/creationix/nvm) 管理 Node 版本，运行 `nvm run start` 时会自动切换到指定的 Node 版本

`css-loader` 并不会加载 css 到页面，`style-loader` 才负责维护一个 style 标签，在样式改变时，动态的更改页面上 style 标签内容。
等到 `mini-css-extract-plugin` 支持 hot reload 时， `style-loader` 会被逐渐取代。

参考：[webpack tutorial](https://www.valentinog.com/blog/webpack-tutorial/)
