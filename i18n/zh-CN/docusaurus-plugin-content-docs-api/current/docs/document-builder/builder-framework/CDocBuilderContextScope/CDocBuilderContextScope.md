# CDocBuilderContextScope

ONLYOFFICE Document Builder 使用的栈分配类，用于为本地作用域内执行的所有操作设置执行上下文。当调用 builder 的 [CloseFile](../CDocBuilder/CloseFile.md) 方法时，所有打开的作用域将自动关闭。

## 语法

```cpp
class CDocBuilderContextScope
```

## 方法

| 名称              | 描述           |
| ----------------- | -------------- |
| [Close](Close.md) | 关闭当前作用域。 |

:::note
Java 使用驼峰命名法的方法名：`close`。
:::
