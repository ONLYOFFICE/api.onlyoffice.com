# CreateNull

Creates a null value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateNull](../CDocBuilderContext/CreateNull.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateNull` method is not used.

## Syntax

```cs
static CDocBuilderValue^ CreateNull();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oNull = oApi.CreateNull();
CDocBuilder.Destroy();
```
