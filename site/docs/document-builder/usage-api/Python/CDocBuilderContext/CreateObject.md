# CreateObject

Creates an empty object, an analogue of `{}` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateObject` method is not used.

## Syntax

```py
def CreateObject(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
content = context.CreateObject()
```
