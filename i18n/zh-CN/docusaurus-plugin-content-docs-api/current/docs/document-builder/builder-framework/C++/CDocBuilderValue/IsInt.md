# IsInt

如果 `CDocBuilderValue` 对象是整数，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsInt` 方法。

## 语法

```cpp
bool IsInt();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bInt = oGlobal.IsInt();
CDocBuilder::Dispose();
```