# IsNull

Returns true if the `CDocBuilderValue` object is null.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsNull` method is not used.

## Syntax

```cpp
bool IsNull();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bNull = oGlobal.IsNull();
CDocBuilder::Dispose();
```
