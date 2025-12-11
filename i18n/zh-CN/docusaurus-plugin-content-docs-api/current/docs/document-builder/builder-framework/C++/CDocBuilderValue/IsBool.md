# IsBool

如果 `CDocBuilderValue` 对象是布尔值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsBool` 方法。

## 语法

```cpp
bool IsBool();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bBool = oGlobal.IsBool();
CDocBuilder::Dispose();
```