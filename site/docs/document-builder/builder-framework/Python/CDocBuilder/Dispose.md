## Description

Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed. Generally, there is no need to dispose JS before exiting the process, it should happen automatically. It should only be used if the process needs the resources taken up by JS.

> Please note, that for the `.docbuilder` file the `CDocBuilder.Dispose` method is not used.

## Syntax

```py
def Dispose(cls);
```

## Example

### Python

``` py
import docbuilder

docbuilder.CDocBuilder.Initialize("../documentBuilder");
builder = docbuilder.CDocBuilder()
docbuilder.CDocBuilder.Dispose()
```
