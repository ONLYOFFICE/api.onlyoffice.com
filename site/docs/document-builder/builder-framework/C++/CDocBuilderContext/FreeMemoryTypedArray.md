# FreeMemoryTypedArray

Frees the memory for a typed array.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.FreeMemoryTypedArray` method is not used.

## Syntax

```cpp
static void FreeMemoryTypedArray(unsigned char* nSize, const size_t* nSize);
```

## Parameters

| **Name** | **Data type**  | **Description**                                 |
| -------- | -------------- | ----------------------------------------------- |
| sData    | unsigned char* | The allocated memory to be released.            |
| nSize    | const size_t*  | The data which will be written to the log file. |

## Example

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CVlaue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, true);
oContext.FreeMemoryTypedArray(sBuffer, 3);
CDocBuilder::Dispose();
```
