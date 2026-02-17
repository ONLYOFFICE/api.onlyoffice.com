# IsObject

如果 `CDocBuilderValue` 对象是一个对象，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsObject` 方法。

## 语法

```cpp
bool IsObject();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bObject = oGlobal.IsObject();
CDocBuilder::Dispose();
```