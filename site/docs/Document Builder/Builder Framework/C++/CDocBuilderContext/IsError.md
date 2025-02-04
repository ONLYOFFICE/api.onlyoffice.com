# IsError

Checks for errors in JS. The error message and call stack will be written to `std::cerr`.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.IsError` method is not used.

## Syntax

```cpp
bool IsError();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
bool bError = oContext.IsError();
CDocBuilder::Dispose();
```
