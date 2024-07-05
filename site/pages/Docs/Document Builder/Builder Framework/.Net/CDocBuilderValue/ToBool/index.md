#### bool ToBool();

Converts the **CDocBuilderValue** object to a boolean value.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToBool* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bGlobal = oGlobal.ToBool();
CDocBuilder.Destroy();
```