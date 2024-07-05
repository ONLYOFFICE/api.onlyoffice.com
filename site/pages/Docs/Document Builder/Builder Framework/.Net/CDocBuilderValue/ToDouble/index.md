#### double ToDouble();

Converts the **CDocBuilderValue** object to a double value.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToDouble* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
double dGlobal = oGlobal.ToDouble();
CDocBuilder.Destroy();
```