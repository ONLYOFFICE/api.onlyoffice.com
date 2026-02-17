# FreeMemoryTypedArray (释放内存类型化数组)

释放类型化数组的内存。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.FreeMemoryTypedArray` 方法。

## 语法

```cpp
static void FreeMemoryTypedArray(unsigned char* nSize, const size_t* nSize);
```

## 参数

| **名称** | **数据类型**   | **描述**                 |
| -------- | -------------- | ------------------------ |
| sData    | unsigned char* | 要释放的已分配内存。     |
| nSize    | const size_t*  | 将要写入日志文件的数据。 |

## 示例

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