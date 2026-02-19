# CreateTypedArray（创建类型化数组）

创建一个 Uint8Array 值，类似于 JS 中的 `Uint8Array`。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderContext.CreateTypedArray` 方法。

## 语法

```cpp
CDocBuilderValue CreateTypedArray(unsigned char* sBuffer, const int& nLength, const bool& bExternalize);
```

## 参数

| **名称**      | **数据类型**   | **描述**                                                                                                                                                                                                                                                                    |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sBuffer       | unsigned char* | 数组缓冲区。                                                                                                                                                                                                                                                                |
| nLength       | const int&     | 数组长度。                                                                                                                                                                                                                                                                  |
| bExternalize  | const bool&    | 指定应用程序在释放 Uint8Array 后是否释放内存（`true` 表示释放）。如果此参数为 `false`，则内存将自动释放。在这种情况下，缓冲区必须通过 [AllocMemoryTypedArray](./AllocMemoryTypedArray.md) 方法创建。                                                                 |

## 示例

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