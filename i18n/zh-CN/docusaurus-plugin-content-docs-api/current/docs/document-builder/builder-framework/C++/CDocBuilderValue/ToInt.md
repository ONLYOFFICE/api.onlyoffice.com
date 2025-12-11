# ToInt（转换为整数）

将 `CDocBuilderValue` 对象转换为整数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToInt` 方法。

## 语法

```cpp
int ToInt();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
int nGlobal = oGlobal.ToInt();
CDocBuilder::Dispose();
```