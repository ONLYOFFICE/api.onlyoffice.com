# ToDouble

Converts the `CDocBuilderValue` object to a double value.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToDouble` method is not used.

## Syntax

```cpp
double ToDouble();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
double dGlobal = oGlobal.ToDouble();
CDocBuilder::Dispose();
```
