# GetGlobal

返回当前上下文的全局对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.GetGlobal` 方法。

## 语法

```py
def GetGlobal(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
```