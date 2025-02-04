# IsInt

Returns true if the `CDocBuilderValue` object is an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsInt` method is not used.

## Syntax

```py
def IsInt(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bInt = globalObj.IsInt()
```
