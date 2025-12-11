# Destroy (销毁)

当不再需要 ONLYOFFICE 文档构建器时，将其从应用程序内存中卸载。通常情况下，在退出进程之前无需销毁 JS，它会自动进行。只有当进程需要 JS 所占用的资源时，才应该使用此方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.Destroy` 方法。

## 语法

```cs
static void Destroy();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```