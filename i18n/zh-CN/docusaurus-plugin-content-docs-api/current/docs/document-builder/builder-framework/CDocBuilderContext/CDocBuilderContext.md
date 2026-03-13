# CDocBuilderContext

用于 ONLYOFFICE Document Builder 获取 JS 上下文的类。

## 语法

```cpp
class CDocBuilderContext
```

## 方法

| 名称                                              | 描述                                                                |
| ------------------------------------------------- | -------------------------------------------------------------------------- |
| [AllocMemoryTypedArray](AllocMemoryTypedArray.md) | 为类型化数组分配内存。*(仅限 C++)*                       |
| [CreateArray](CreateArray.md)                     | 创建数组，相当于 JS 中的 `new Array (length)`。               |
| [CreateNull](CreateNull.md)                       | 创建 null 值，相当于 JS 中的 `null`。                         |
| [CreateObject](CreateObject.md)                   | 创建空对象，相当于 JS 中的 `{}`。                        |
| [CreateScope](CreateScope.md)                     | 创建上下文作用域。                                                   |
| [CreateTypedArray](CreateTypedArray.md)           | 创建 Uint8Array 值，相当于 JS 中的 `Uint8Array`。*(Java 和 Python 中不使用)* |
| [CreateUndefined](CreateUndefined.md)             | 创建 undefined 值，相当于 JS 中的 `undefined`。              |
| [FreeMemoryTypedArray](FreeMemoryTypedArray.md)   | 释放类型化数组的内存。*(仅限 C++)*                           |
| [GetGlobal](GetGlobal.md)                         | 返回当前上下文的全局对象。                         |
| [IsError](IsError.md)                             | 检查 JS 中的错误。                                                   |

:::note
Java 使用 camelCase 方法名：`createArray`、`createNull`、`createObject` 等。
:::
