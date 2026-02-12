# IsSaveWithDoctrendererMode

指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.IsSaveWithDoctrendererMode` 方法。

## 语法

```cpp
bool IsSaveWithDoctrendererMode();
```

## 示例

### C++

```cpp
std::wstring sWorkDirectory = NSUtils::GetBuilderDirectory();
CDocBuilder::Initialize(sWorkDirectory.c_str());
CDocBuilder oBuilder;
bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
CDocBuilder::Dispose();
```