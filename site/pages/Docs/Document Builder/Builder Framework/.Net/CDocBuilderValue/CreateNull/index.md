#### static CDocBuilderValue^ CreateNull();

Creates a null value. This method returns the current [context](/docbuilder/integrationapi/net/cdocbuildercontext) and calls its [CreateNull](/docbuilder/integrationapi/net/cdocbuildercontext/createnull) method.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.CreateNull* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oNull = oApi.CreateNull();
CDocBuilder.Destroy();
```