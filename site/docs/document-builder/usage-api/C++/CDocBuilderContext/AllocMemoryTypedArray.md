# AllocMemoryTypedArray

Allocates the memory for a typed array by creating a buffer array of the specified size.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.AllocMemoryTypedArray` method is not used.

## Syntax

```cpp
static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
```

## Parameters

| **Name** | **Data type** | **Description**        |
| -------- | ------------- | ---------------------- |
| nSize    | const size_t* | The buffer array size. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, false);
CDocBuilder::Dispose();
```
