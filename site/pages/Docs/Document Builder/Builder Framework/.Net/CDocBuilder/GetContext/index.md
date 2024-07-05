#### CDocBuilderContext^ GetContext();

Returns the current JS [context](/docbuilder/integrationapi/net/cdocbuildercontext).

Please note, that for the *.docbuilder* file the *CDocBuilder.GetContext* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CDocBuilder.Destroy();
```