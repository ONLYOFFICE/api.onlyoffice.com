# CDocBuilderContext

仅由 ONLYOFFICE 文档生成器使用，用于获取工作所需的 JS 上下文。

## 语法

```cpp
class CDocBuilderContext
```

## 实例方法

| 方法                                     | 描述                                                            |
| ---------------------------------------- | --------------------------------------------------------------- |
| [CreateArray](CreateArray.md)            | 创建一个数组，相当于 JavaScript 中的 `new Array(length)`。       |
| [CreateNull](CreateNull.md)              | 创建一个 null 值，相当于 JavaScript 中的 `null`。                |
| [CreateObject](CreateObject.md)          | 创建一个空对象，相当于 JavaScript 中的 `{}`。                    |
| [CreateScope](CreateScope.md)            | 创建用于执行 JavaScript 代码的上下文作用域。                     |
| [CreateTypedArray](CreateTypedArray.md)  | 创建一个 Uint8Array 值，相当于 JavaScript 中的 `Uint8Array`。    |
| [CreateUndefined](CreateUndefined.md)    | 创建一个 undefined 值，相当于 JavaScript 中的 `undefined`。      |
| [GetGlobal](GetGlobal.md)                | 返回当前上下文的全局对象。                                      |
| [IsError](IsError.md)                    | 检查 JavaScript 代码执行中的错误。                               |