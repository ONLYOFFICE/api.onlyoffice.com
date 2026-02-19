# GetLength

Returns the length if the `CDocBuilderValue` object is an array. Otherwise, returns 0.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.GetLength` method is not used.

## Syntax

```py
def GetLength(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
charts = document.GetAllCharts()
length = charts.GetLength()
```
