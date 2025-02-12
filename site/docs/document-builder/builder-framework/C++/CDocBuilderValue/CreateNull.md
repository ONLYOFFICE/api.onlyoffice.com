# CreateNull

Creates a null value. This method returns the current [context](../CDocBuilderContext/CDocBuilderContext.md) and calls its [CreateNull](../CDocBuilderContext/CreateNull.md) method.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.CreateNull` method is not used.

## Syntax

```cpp
static CDocBuilderValue CreateNull();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oNull = oApi.CreateNull();
CDocBuilder::Dispose();
```
