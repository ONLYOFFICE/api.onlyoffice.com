#### bool IsUndefined();

Returns true if the **CDocBuilderValue** object is undefined.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.IsUndefined* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bUndefined = oGlobal.IsUndefined();
CDocBuilder::Dispose();
```