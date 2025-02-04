# IsTypedArray

Returns true if the `CDocBuilderValue` object is a typed array.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsTypedArray` method is not used.

## Syntax

```cpp
bool IsTypedArray();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bTypedArray = oGlobal.IsTypedArray();
CDocBuilder::Dispose();
```
