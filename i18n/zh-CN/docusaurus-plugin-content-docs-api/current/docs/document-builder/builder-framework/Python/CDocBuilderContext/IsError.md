# IsError

检查JS中的错误。错误消息和调用堆栈将被写入`std::cerr`。

> 请注意，对于`.docbuilder`文件，不使用`CDocBuilderContext.IsError`方法。

## 语法

```py
def IsError(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
bError = context.IsError()
```