# CreateScope（创建作用域）

创建一个[上下文作用域](../CDocBuilderContextScope/CDocBuilderContextScope.md)，该作用域为在本地范围内执行的所有操作设置执行上下文。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateScope` 方法。

## 语法

```py
def CreateScope(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
scope = context.CreateScope()
```