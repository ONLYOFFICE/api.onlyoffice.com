#### CDocBuilderValue CreateNull();

Creates a null value, an analogue of *null* in JS.

Please note, that for the *.docbuilder* file the *CDocBuilderContext.CreateNull* method is not used.

## Example

#### C++

```
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oNull = oContext.CreateNull();
CDocBuilder::Dispose();
```