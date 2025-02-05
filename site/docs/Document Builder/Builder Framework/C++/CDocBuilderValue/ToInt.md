# ToInt

Converts the `CDocBuilderValue` object to an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.ToInt` method is not used.

## Syntax

```cpp
int ToInt();
```

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
int nGlobal = oGlobal.ToInt();
CDocBuilder::Dispose();
```
