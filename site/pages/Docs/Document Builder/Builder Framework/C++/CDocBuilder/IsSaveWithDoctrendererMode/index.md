#### bool IsSaveWithDoctrendererMode();

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

Please note, that for the *.docbuilder* file the *CDocBuilder.IsSaveWithDoctrendererMode* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
CDocBuilder::Dispose();
```