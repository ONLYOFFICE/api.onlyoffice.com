#### bool IsBool();

Returns true if the **CDocBuilderValue** object is a boolean value.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsBool* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bBool = oGlobal.IsBool();
CDocBuilder.Destroy();
```