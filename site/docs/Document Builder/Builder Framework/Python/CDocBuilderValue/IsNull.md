# IsNull

Returns true if the `CDocBuilderValue` object is null.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsNull` method is not used.

## Syntax

```py
def IsNull(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bNull = globalObj.IsNull()
```
