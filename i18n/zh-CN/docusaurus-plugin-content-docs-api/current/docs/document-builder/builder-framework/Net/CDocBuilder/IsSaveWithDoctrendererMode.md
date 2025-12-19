# IsSaveWithDoctrendererMode

指定在构建文档或保存文件时从编辑器获取内容时是否使用 doctrenderer 模式。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.IsSaveWithDoctrendererMode` 方法。

## 语法

```cs
bool IsSaveWithDoctrendererMode();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
bool bDoctrendererMode = oBuilder.IsSaveWithDoctrendererMode();
CDocBuilder.Destroy();
```