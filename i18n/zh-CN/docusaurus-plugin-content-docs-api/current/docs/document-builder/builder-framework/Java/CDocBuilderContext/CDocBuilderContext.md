# CDocBuilderContext

该类仅由 ONLYOFFICE Document Builder 用于获取 JS 上下文以进行操作。

## 语法

```java
class CDocBuilderContext
```

## 实例方法

| 方法                                   | 描述                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| [createArray](createArray.md)         | 创建一个数组，类似于 JS 中的 `new Array(length)`。   |
| [createNull](createNull.md)           | 创建一个 null 值，类似于 JS 中的 `null`。            |
| [createObject](createObject.md)       | 创建一个空对象，类似于 JS 中的 `{}`。                |
| [createScope](createScope.md)         | 创建一个上下文作用域。                                |
| [createUndefined](createUndefined.md) | 创建一个 undefined 值，类似于 JS 中的 `undefined`。 |
| [getGlobal](getGlobal.md)             | 返回当前上下文的全局对象。                            |
| [isError](isError.md)                 | 检查 JS 中的错误。                                    |