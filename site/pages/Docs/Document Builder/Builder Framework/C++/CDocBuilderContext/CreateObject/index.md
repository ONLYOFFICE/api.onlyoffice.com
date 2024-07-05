#### CDocBuilderValue CreateObject();

Creates an empty object, an analogue of *{}* in JS.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateObject* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oObject = oContext.CreateObject();
CDocBuilder::Dispose();
```