# IsArray

Returns true if the `CDocBuilderValue` object is an array.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsArray` method is not used.

## Syntax

```cs
bool IsArray();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bArray = oGlobal.IsArray();
CDocBuilder.Destroy();
```
