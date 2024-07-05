#### bool IsEmpty();

Returns true if the **CDocBuilderValue** object is empty.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsEmpty* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bEmpty = oGlobal.IsEmpty();
CDocBuilder::Dispose();
```