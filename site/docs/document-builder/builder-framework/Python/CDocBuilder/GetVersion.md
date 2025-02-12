# GetVersion

Returns the ONLYOFFICE Document Builder engine version.

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetVersion` method is not used.

## Syntax

```py
def GetVersion(self);
```

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
version = builder.GetVersion()
```
