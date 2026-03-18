# AllocMemoryTypedArray

通过创建指定大小的缓冲区数组来为类型化数组分配内存。

:::note
此方法仅适用于 **C++**。
:::

## 语法

```cpp
static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
```

## 参数

| 名称  | 类型          | 描述             |
| ----- | ------------- | ---------------- |
| nSize | const size_t* | 缓冲区数组大小。 |

## 示例

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
unsigned char* sBuffer = oContext.AllocMemoryTypedArray(1500);
CValue oTypedArray = oContext.CreateTypedArray(sBuffer, 3, false);
CDocBuilder::Dispose();
```
