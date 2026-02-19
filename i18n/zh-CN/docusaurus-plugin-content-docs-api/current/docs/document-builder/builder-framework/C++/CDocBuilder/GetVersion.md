# GetVersion (获取版本)

返回 ONLYOFFICE 文档生成器引擎版本。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetVersion` 方法。

## 语法

```cpp
char* GetVersion();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
char* sVersion = oBuilder.GetVersion();
CDocBuilder::Dispose();
```