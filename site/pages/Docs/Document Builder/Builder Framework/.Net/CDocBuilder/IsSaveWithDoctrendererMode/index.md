#### bool IsSaveWithDoctrendererMode();

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

Please note, that for the *.docbuilder* file the *CDocBuilder.IsSaveWithDoctrendererMode* method is not used.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
CDocBuilder.Destroy();
```