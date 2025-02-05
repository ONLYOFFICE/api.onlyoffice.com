# CreateNull

Creates a null value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateNull](../CDocBuilderContext/CreateNull.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateNull` method is not used.

## Syntax

```py
def CreateNull();
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
null = api.CreateNull()
```
