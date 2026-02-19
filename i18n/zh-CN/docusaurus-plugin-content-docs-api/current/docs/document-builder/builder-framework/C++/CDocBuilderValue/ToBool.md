# ToBool（转换为布尔值）

将 `CDocBuilderValue` 对象转换为布尔值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToBool` 方法。

## 语法

```cpp
bool ToBool();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bGlobal = oGlobal.ToBool();
CDocBuilder::Dispose();
```