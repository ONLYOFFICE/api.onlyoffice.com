#### CDocBuilderValue CreateUndefined();

Creates an undefined value, an analogue of *undefined* in JS.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateUndefined* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oUndefined = oContext.CreateUndefined();
CDocBuilder::Dispose();
```