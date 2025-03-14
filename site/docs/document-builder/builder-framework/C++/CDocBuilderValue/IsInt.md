# IsInt

Returns true if the `CDocBuilderValue` object is an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsInt` method is not used.

## Syntax

```cpp
bool IsInt();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bInt = oGlobal.IsInt();
CDocBuilder::Dispose();
```
