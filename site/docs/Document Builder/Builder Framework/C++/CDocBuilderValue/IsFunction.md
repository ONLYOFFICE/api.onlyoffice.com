# IsFunction

Returns true if the `CDocBuilderValue` object is a function.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.IsFunction` method is not used.

## Syntax

```cpp
bool IsFunction();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bFunction = oGlobal.IsFunction();
CDocBuilder::Dispose();
```
