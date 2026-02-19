# CDocBuilderContextScope

仅由 ONLYOFFICE 文档构建器使用的栈分配类，它为在本地范围内执行的所有操作设置执行上下文。当调用构建器的 [CloseFile](../CDocBuilder/CloseFile.md) 方法时，所有已打开的作用域都将自动关闭。

## 语法

```cpp
class CDocBuilderContextScope
```

## 实例方法

| **名称**          | **描述**           |
| ----------------- | ------------------------- |
| [Close](Close.md) | 关闭当前作用域。 |