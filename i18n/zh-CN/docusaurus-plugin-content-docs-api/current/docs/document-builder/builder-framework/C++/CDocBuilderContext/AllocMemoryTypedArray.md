# AllocMemoryTypedArray (分配内存类型化数组)

通过创建指定大小的缓冲区数组为类型化数组分配内存。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.AllocMemoryTypedArray` 方法。

## 语法

```cpp
static unsigned char* AllocMemoryTypedArray(const size_t* nSize);
```

## 参数

| **名称** | **数据类型**   | **描述**       |
| -------- | -------------- | -------------- |
| nSize    | const size_t*  | 缓冲区数组大小 |

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