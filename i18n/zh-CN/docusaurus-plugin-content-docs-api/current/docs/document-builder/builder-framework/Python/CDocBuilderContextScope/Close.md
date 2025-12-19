# Close（关闭）

关闭当前作用域。此方法将在析构函数执行时自动调用。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContextScope.Close` 方法。

## 语法

```py
def Close(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
scope = context.CreateScope()
scope.Close()
```