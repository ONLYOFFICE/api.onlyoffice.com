# IsInt

Returns true if the `CDocBuilderValue` object is an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsInt` method is not used.

## Syntax

```cs
bool IsInt();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bInt = oGlobal.IsInt();
CDocBuilder.Destroy();
```
