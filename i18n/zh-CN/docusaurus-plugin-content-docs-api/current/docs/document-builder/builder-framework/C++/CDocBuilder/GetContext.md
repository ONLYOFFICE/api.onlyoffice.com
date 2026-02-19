# GetContext（获取上下文）

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetContext` 方法。

## 语法

```cpp
CDocBuilderContext GetContext();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
CDocBuilderContext oContext = oBuilder.GetContext();
CDocBuilder::Dispose();
```