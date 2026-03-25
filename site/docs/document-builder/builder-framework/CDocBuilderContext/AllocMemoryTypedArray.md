# AllocMemoryTypedArray

Allocates the memory for a typed array by creating a buffer array of the specified size.

:::note
This method is only available for **C++**.
:::

## Syntax

```cpp
static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
```

## Parameters

| Name  | Type          | Description            |
| ----- | ------------- | ---------------------- |
| nSize | const size_t* | The buffer array size. |

## Example

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, false);
CDocBuilder::Dispose();
```
