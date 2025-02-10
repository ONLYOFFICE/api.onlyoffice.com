# IsEmpty

Returns true if the `CDocBuilderValue` object is empty.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsEmpty` method is not used.

## Syntax

```cs
bool IsEmpty();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bEmpty = oGlobal.IsEmpty();
CDocBuilder.Destroy();
```
