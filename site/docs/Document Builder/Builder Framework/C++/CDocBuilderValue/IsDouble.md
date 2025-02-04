# IsDouble

Returns true if the `CDocBuilderValue` object is a double value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsDouble` method is not used.

## Syntax

```cpp
bool IsDouble();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bDouble = oGlobal.IsDouble();
CDocBuilder::Dispose();
```
