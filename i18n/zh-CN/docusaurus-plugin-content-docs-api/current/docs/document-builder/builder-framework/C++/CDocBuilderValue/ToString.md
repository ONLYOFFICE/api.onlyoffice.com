# ToString（转换为字符串）

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，在 `.docbuilder` 文件中，不会使用 `CDocBuilderValue.ToString` 方法。

## 语法

```cpp
CString ToString();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CValue oGlobal = oContext.GetGlobal();
CValue oGlobal = oContext.GetGlobal();
CString sGlobal = oGlobal.ToString();
CDocBuilder::Dispose();
```