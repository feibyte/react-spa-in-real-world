# 准备开发环境

## 配置 Webpack
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

## 引入 ESLint

`.eslintrc` 已经废弃，可选 JSON 或者 YAML。 JSON 并不是很适合作为配置文件，当然 YAML 本身也有问题：解析太复杂。  
就使用者而言， YAML 很清晰，可添加注释，所以选择 YAML  

eslint 规范我们选择 airbnb, 运行命令：`npx install-peerdeps --dev eslint-config-airbnb`，这条命令会一并安装包以及依赖：  
`eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react` `eslint`。  

npx 是 **npm 5+** 提供的命令，有了这个，我们可以直接运行本地的可执行文件。原来需要安装全局的 `eslint` 才可执行 `eslint src`，现在只需要 `npx eslint src`。

`babel-eslint` 是因为 jsx 的原因才引入，作为 eslint 的 parser。  

env 设置 `browser: true`， 因为项目中会用到浏览器对象比如 document 等。    

我们禁用了一条 rule: `react/jsx-filename-extension: off` 因为我们的文件依然是 js 后缀。React 团队和 Airbnb 有不同的看法: [airbnb](https://github.com/airbnb/javascript/issues/1235)
 VS [create-react-app](https://github.com/facebook/create-react-app/issues/87) 。就个人而言，省去切换的麻烦，不需要注意非 React 文件扩展名。
 
 禁用规则：`import/no-extraneous-dependencies: off` 因为它期望用到的第三方依赖在 `dependencies` 中（create-react-app 弹出的项目就是这样），
 但是个人偏好脚本和配置文件依赖的三方库只在 devDependencies 中指明。

了解更多：   
[为什么说 JSON 不是一个好的配置语言]((https://www.lucidchart.com/techblog/2018/07/16/why-json-isnt-a-good-configuration-language/)  
[YAML 可能没有那么好](https://arp242.net/weblog/yaml_probably_not_so_great_after_all.html)  

## 支持 Sass 整合 postcss
sass-loader 不多说，值得注意的是： sourceMap 需要与 devtool 配合使用。 设置 sourceMap 之后，点击样式名能够打开源 SCSS 文件，所以 `localIdentName` 也没必要设置的这么啰嗦。    
`localIdentName: '[name]__[local]___[hash:base64:6]'` name 是文件名，其实也不必要因为 sourceMap 可以直接打开文件，但是个人还是保留文件名，比如：  
假设 Card component 对应的样式文件 `Card.scss` 中包含 `.title {}` ， 生成的名称是 Card_title_[hash:6] 可读性很好。   
`css-loader` 有个很奇怪的设置 `importLoaders: 2`， [这儿](https://github.com/webpack-contrib/css-loader/issues/228)有讨论为什这样设置。虽说有人提到 `sass-loader` 可忽略计数，但这儿还是保持 2 跟文档一致。  

`postcss.config.js` 中配置有 `autoprefixer` 和 `cssnano`， 当然 `cssnano` 在开发时可注释掉。

参考：
[A tale of webpack 4](https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1)
