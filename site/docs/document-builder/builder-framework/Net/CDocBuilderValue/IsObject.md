# IsObject

Returns true if the `CDocBuilderValue` object is an object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsObject` method is not used.

## Syntax

```cs
bool IsObject();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bObject = oGlobal.IsObject();
CDocBuilder.Destroy();
```
