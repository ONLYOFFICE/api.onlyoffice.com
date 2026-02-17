# CreateNull

创建一个空值，类似于 JS 中的 `null`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateNull` 方法。

## 语法

```py
def CreateNull(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateNull()
```