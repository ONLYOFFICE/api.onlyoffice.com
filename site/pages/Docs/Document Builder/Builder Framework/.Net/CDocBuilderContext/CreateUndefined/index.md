#### CDocBuilderValue^ CreateUndefined();

Creates an undefined value, an analogue of *undefined* in JS.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateUndefined* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oUndefined = oContext.CreateUndefined();
CDocBuilder.Destroy();
```