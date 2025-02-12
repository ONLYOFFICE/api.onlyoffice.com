# GetVersion

Returns the ONLYOFFICE Document Builder engine version.

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetVersion` method is not used.

## Syntax

```cs
String^ GetVersion();
```

## Example

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
string sVersion = oBuilder.GetVersion();
CDocBuilder.Destroy();
```
