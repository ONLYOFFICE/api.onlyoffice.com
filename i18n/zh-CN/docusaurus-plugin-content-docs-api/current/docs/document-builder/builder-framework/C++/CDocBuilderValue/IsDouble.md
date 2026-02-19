# IsDouble

如果 `CDocBuilderValue` 对象是双精度浮点数值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsDouble` 方法。

## 语法

```cpp
bool IsDouble();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bDouble = oGlobal.IsDouble();
CDocBuilder::Dispose();
```