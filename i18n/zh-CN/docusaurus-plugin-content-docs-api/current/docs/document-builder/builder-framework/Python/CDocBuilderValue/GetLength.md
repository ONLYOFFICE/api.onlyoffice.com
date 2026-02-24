# GetLength

如果 `CDocBuilderValue` 对象是数组，则返回其长度。否则，返回 0。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.GetLength` 方法。

## 语法

```py
def GetLength(self);
```

## 示例

### Python

```py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
charts = document.GetAllCharts()
length = charts.GetLength()
```