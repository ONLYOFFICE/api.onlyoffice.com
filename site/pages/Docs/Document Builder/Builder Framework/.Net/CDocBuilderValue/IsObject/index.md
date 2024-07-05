#### bool IsObject();

Returns true if the **CDocBuilderValue** object is an object.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsObject* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bObject = oGlobal.IsObject();
CDocBuilder.Destroy();
```