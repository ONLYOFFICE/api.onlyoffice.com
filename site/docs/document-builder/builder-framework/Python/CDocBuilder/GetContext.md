# GetContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetContext` method is not used.

## Syntax

```py
def GetContext(self);
```

## Example

### Python

``` py
import docbuilder

builder = docbuilder.CDocBuilder()
context = builder.GetContext()
```
