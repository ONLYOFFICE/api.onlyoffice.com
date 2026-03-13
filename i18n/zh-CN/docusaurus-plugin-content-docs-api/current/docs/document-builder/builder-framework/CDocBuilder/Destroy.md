# Destroy

当不再需要时，从应用程序内存中卸载 ONLYOFFICE Document Builder。通常情况下，在退出进程之前不需要释放 JS，它应该会自动释放。仅当进程需要 JS 占用的资源时才应使用此方法。

:::note
此方法仅适用于 .Net。对于其他语言，请使用 [Dispose](Dispose.md)。对于 `.docbuilder` 文件，不使用 `CDocBuilder.Destroy` 方法。
:::

## 语法

```cs
static void Destroy();
```

## 示例

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CDocBuilder.Destroy();
```
