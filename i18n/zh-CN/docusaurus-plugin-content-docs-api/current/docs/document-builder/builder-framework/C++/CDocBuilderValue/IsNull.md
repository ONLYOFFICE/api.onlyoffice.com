# IsNull（是否为空）

如果 `CDocBuilderValue` 对象为 null，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsNull` 方法。

## 语法

```cpp
bool IsNull();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bNull = oGlobal.IsNull();
CDocBuilder::Dispose();
```