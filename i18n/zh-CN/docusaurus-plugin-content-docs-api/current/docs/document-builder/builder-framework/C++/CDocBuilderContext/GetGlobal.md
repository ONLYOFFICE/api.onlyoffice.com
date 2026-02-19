# GetGlobal

返回当前上下文的全局对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.GetGlobal` 方法。

## 语法

```cpp
CDocBuilderValue GetGlobal();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CDocBuilder::Dispose();
```