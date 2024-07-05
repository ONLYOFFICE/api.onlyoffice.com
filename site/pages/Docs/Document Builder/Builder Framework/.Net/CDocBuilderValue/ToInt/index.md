#### int ToInt();

Converts the **CDocBuilderValue** object to an integer.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToInt* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
int nGlobal = oGlobal.ToInt();
CDocBuilder.Destroy();
```