# Clear (清除)

清除 `CDocBuilderValue` 对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.Clear` 方法。

## 语法

```py
def Clear(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
document.Clear()
```