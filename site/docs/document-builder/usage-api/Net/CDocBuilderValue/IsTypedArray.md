# IsTypedArray

Returns true if the `CDocBuilderValue` object is a typed array.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsTypedArray` method is not used.

## Syntax

```cs
bool IsTypedArray();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bTypedArray = oGlobal.IsTypedArray();
CDocBuilder.Destroy();
```
