# CreateTypedArray

Creates a Uint8Array value, an analogue of `Uint8Array` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.CreateTypedArray` method is not used.

## Syntax

```cpp
CDocBuilderValue CreateTypedArray(unsigned char* sBuffer, const int& nLength, const bool& bExternalize);
```

## Parameters

| **Name**     | **Data type**  | **Description**                                                                                                                                                                                                                                                                 |
| ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sBuffer      | unsigned char* | The array buffer.                                                                                                                                                                                                                                                               |
| nLength      | const int&     | The array length.                                                                                                                                                                                                                                                               |
| bExternalize | const bool&    | Specifies if the application releases the memory after freeing Uint8Array (`true`). If this parameter is `false`, then the memory will be released automatically. In this case, the buffer must be created with the [AllocMemoryTypedArray](./AllocMemoryTypedArray.md) method. |

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
