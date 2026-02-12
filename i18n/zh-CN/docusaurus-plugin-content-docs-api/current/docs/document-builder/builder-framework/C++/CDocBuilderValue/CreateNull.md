# CreateNull

创建一个空值。此方法返回当前的 [上下文](../CDocBuilderContext/CDocBuilderContext.md) 并调用其 [CreateNull](../CDocBuilderContext/CreateNull.md) 方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.CreateNull` 方法。

## 语法

```cpp
static CDocBuilderValue CreateNull();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oNull = oApi.CreateNull();
CDocBuilder::Dispose();
```