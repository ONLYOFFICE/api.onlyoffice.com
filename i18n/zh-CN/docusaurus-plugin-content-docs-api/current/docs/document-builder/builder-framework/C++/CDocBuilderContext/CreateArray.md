# CreateArray（创建数组）

创建一个数组值，类似于 JavaScript 中的 `new Array(length)`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateArray` 方法。

## 语法

```cpp
CDocBuilderValue CreateArray(const int& nLength);
```

## 参数

| **名称** | **数据类型** | **描述**     |
| -------- | ------------ | ------------ |
| nLength  | const int&   | 数组的长度。 |

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oArray = oContext.CreateArray(2);
CDocBuilder::Dispose();
```