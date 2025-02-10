# IsNull

Returns true if the `CDocBuilderValue` object is null.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsNll` method is not used.

## Syntax

```cs
bool IsNull();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bNull = oGlobal.IsNull();
CDocBuilder.Destroy();
```
