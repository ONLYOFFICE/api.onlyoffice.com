#### bool IsTypedArray();

Returns true if the **CDocBuilderValue** object is a typed array.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsTypedArray* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bTypedArray = oGlobal.IsTypedArray();
CDocBuilder.Destroy();
```