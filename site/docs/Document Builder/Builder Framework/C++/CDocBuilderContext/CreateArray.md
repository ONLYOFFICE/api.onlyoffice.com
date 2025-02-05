# CreateArray

Creates an array value, an analogue of `new Array (length)` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateArray` method is not used.

## Syntax

```cpp
CDocBuilderValue CreateArray(const int& nLength);
```

## Parameters

| **Name** | **Data type** | **Description**   |
| -------- | ------------- | ----------------- |
| nLength  | const int&    | The array length. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oArray = oContext.CreateArray(2);
CDocBuilder::Dispose();
```
