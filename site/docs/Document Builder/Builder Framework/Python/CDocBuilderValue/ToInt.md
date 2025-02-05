# ToInt

Converts the `CDocBuilderValue` object to an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToInt` method is not used.

## Syntax

```py
def ToInt(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
nGlobal = globalObj.ToInt()
```
