# CDocBuilderContextScope

仅由 ONLYOFFICE 文档生成器使用的栈分配类，用于为在局部范围内执行的所有操作设置执行上下文。当生成器的 [CloseFile](../CDocBuilder/CloseFile.md) 方法被调用时，所有已打开的作用域都将自动关闭。

## 语法

```cpp
class CDocBuilderContextScope
```

## 实例方法

| 方法              | 描述                 |
| ----------------- | -------------------- |
| [Close](Close.md) | 关闭当前作用域       |