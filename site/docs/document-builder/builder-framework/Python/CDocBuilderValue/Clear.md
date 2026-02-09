# Clear

Clears the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Clear` method is not used.

## Syntax

```py
def Clear(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.GetDocument()
document.Clear()
```
