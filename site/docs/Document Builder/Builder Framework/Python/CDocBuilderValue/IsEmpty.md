# IsEmpty

Returns true if the `CDocBuilderValue` object is empty.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsEmpty` method is not used.

## Syntax

```py
def IsEmpty(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
bEmpty = globalObj.IsEmpty()
```
