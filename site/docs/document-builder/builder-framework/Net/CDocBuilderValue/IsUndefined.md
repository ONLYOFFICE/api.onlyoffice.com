# IsUndefined

Returns true if the `CDocBuilderValue` object is undefined.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsUndefined` method is not used.

## Syntax

```cs
bool IsUndefined();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bUndefined = oGlobal.IsUndefined();
CDocBuilder.Destroy();
```
