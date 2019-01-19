# 在一切之前

## 项目选择
我选择 [realworld](https://github.com/gothinkster/realworld) 中的项目 仿 [Medium.com](https://medium.com/)。主要因为这个产品大家都很熟悉，另外有现成的后端服务。

## 技术选择

React + Redux + Babel + FlowType + Webpack + SCSS + ESLint + Jest

如果选择 React 的话， 技术栈差不太多。尽可能的选择主流的技术栈，可能的不同：  
1. 是选择 ES 还是 强类型的 Flow 或者 TypeScript  
就个人来看，小项目或者短期项目没必要上强类型。 强类型带来便捷的同时也是需要好好花心思维护的，否则只是一个负担。一次，有人因为 Flow 的问题花了半天时间，一个同事截官网图并回复：Flow 说会让你 CODE FASTER.
因为现在团队在用的就是 Flow, 所以选 Flow。 以后可能会考虑 TypeScript，如果所有团队准备好切换的话。  
2. SCSS，LESS 还是 styled-components  
SCSS 与 LESS 中选择 SCSS; styled-components 的话，如果是 React-Native 项目会考虑。  
3. Redux-Thunk 还是 Redux-Saga  
个人来看，Saga 确实提供了强大的功能，但是更多时候，redux-thunk 就足够了。综合考虑还是选择 Redux-Thunk.  

## 开发方式


  

 
