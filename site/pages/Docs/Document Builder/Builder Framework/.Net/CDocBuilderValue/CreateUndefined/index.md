#### static CDocBuilderValue^ CreateUndefined();

Creates an undefined value. This method returns the current [context](/docbuilder/integrationapi/net/cdocbuildercontext) and calls its [CreateUndefined](/docbuilder/integrationapi/net/cdocbuildercontext/createundefined) method.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.CreateUndefined* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oUndefined = oApi.CreateUndefined();
CDocBuilder.Destroy();
```