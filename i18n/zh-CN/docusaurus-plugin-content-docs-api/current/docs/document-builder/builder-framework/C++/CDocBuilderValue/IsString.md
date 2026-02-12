# IsString

如果 `CDocBuilderValue` 对象是字符串，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsString` 方法。

## 语法

```cpp
bool IsString();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bString = oGlobal.IsString();
CDocBuilder::Dispose();
```