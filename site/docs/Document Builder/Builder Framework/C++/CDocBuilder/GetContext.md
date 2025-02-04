# GetContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

> Please note, that for the `.docbuilder` file the `CDocBuilder.GetContext` method is not used.

## Syntax

```cpp
CDocBuilderContext GetContext();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CDocBuilderContext oContext = oBuilder.GetContext();
CDocBuilder::Dispose();
```
