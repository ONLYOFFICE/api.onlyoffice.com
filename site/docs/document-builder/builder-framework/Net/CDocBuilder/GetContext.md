# GetContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetContext` method is not used.

## Syntax

```cs
CDocBuilderContext^ GetContext();
```

## Example

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CDocBuilder.Destroy();
```
