# IsUndefined

如果 `CDocBuilderValue` 对象未定义，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsUndefined` 方法。

## 语法

```cpp
bool IsUndefined();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bUndefined = oGlobal.IsUndefined();
CDocBuilder::Dispose();
```