
# 关于 Flow

使用 `flow-typed` 安装类型定义:   
`npx flow-typed install jest`  
`npx flow-typed install enzyme`  


## `flow` definition 坑：
1. 即使没有安装定义，你也可以导入就像你定义了一样： `import type { AnyTypeNotExist } from 'redux';` 只不过你得到的是 any 类型。 
2. 在类型定义中不能引用其他类型，`enzyme` 的类型定义文件中就有 `import * as React from "react";` 结果就是你可以不导入就直接使用 React 类型。当然这都是 any 类型。
都是些活生生的例子，还有 `react-redux` 也导致污染 Dispatch 类型。   
这些问题很难注意到，因为没有任何警告信息，只是给你一个一切正常的错觉。

## `$FlowFixMe`     
Flow 并没有聪明到可以推断内容。举个例子，一个常量数组 colors 长度为 10, 你在访问时 Flow 还是会提示可能为空 colors[i]。这个时候可以用逻辑来规避掉，添加一个空检测
`if (colors[i]) {}` 即可。 有的团队可能这么做的，个人不推荐，因为 Flow 的问题不应该用添加代码逻辑的方式去修复，以后很可能有人纳闷为什么要有这个检测逻辑，所以，我们团队比较倾向于使用 `$FlowFixMe`。
当然`$FlowFixMe`也有小问题，IDE 可能会识别为一个 TODO 任务

## `jest.mock` 类型推断

