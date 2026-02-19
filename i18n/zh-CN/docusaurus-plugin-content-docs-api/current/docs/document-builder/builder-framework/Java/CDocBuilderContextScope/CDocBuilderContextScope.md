# CDocBuilderContextScope

仅由 ONLYOFFICE 文档生成器使用的栈分配类，用于为在本地作用域内执行的所有操作设置执行上下文。当调用生成器的 [closeFile](../CDocBuilder/closeFile.md) 方法时，所有已打开的作用域都将自动关闭。

## 语法

```java
class CDocBuilderContextScope
```

## 实例方法

| 方法              | 描述                 |
| ----------------- | -------------------- |
| [close](close.md) | 关闭当前作用域。     |