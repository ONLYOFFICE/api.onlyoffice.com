# CreateNull

创建一个空值，类似于 JS 中的 `null`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateNull` 方法。

## 语法

```cpp
CDocBuilderValue CreateNull();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oNull = oContext.CreateNull();
CDocBuilder::Dispose();
```