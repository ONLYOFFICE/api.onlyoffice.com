# IsBool

Returns true if the `CDocBuilderValue` object is a boolean value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsBool` method is not used.

## Syntax

```py
def IsBool(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bBool = globalObj.IsBool()
```
