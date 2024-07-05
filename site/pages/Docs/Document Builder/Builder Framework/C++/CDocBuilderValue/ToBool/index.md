#### bool ToBool();

Converts the **CDocBuilderValue** object to a boolean value.

Please note, that for the *.docbuilder* file the *CDocBuilderValue.ToBool* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bGlobal = oGlobal.ToBool();
CDocBuilder::Dispose();
```