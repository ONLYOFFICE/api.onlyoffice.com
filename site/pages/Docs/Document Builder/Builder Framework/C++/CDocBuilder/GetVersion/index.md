#### char\* GetVersion();

Returns the **ONLYOFFICE Document Builder** engine version.

Please note, that for the *.docbuilder* file the *CDocBuilder.GetVersion* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
char* sVersion = oBuilder.GetVersion();
CDocBuilder::Dispose();
```