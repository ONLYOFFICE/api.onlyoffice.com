# CreateUndefined

Creates an undefined value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateUndefined](../CDocBuilderContext/CreateUndefined.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateUndefined` method is not used.

## Syntax

```cs
static CDocBuilderValue^ CreateUndefined();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oUndefined = oApi.CreateUndefined();
CDocBuilder.Destroy();
```
