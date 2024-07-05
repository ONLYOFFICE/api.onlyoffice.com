#### CDocBuilderValue^ CreateNull();

Creates a null value, an analogue of *null* in JS.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateNull* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oNull = oContext.CreateNull();
CDocBuilder.Destroy();
```