# ToDouble

Converts the `CDocBuilderValue` object to a double value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToDouble` method is not used.

## Syntax

```py
def ToDouble(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
dGlobal = globalObj.ToDouble()
```
