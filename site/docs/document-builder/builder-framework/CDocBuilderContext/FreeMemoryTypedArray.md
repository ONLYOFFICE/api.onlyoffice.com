# FreeMemoryTypedArray

Frees the memory for a typed array.

:::note
This method is only available for **C++**.
:::

## Syntax

```cpp
static void FreeMemoryTypedArray(unsigned char* sData, const size_t* nSize);
```

## Parameters

| Name  | Type           | Description                          |
| ----- | -------------- | ------------------------------------ |
| sData | unsigned char* | The allocated memory to be released. |
| nSize | const size_t*  | The buffer array size.               |

## Example

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, true);
oContext.FreeMemoryTypedArray(sBuffer, 3);
CDocBuilder::Dispose();
```
