# IsError

Checks for errors in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.IsError` method is not used.

## Syntax

```cs
bool IsError();
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
bool bError = oContext.IsError();
CDocBuilder.Destroy();
```
