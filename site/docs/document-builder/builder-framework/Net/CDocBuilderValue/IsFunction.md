# IsFunction

Returns true if the `CDocBuilderValue` object is a function.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsFunction` method is not used.

## Syntax

```cs
bool IsFunction();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bFunction = oGlobal.IsFunction();
CDocBuilder.Destroy();
```
