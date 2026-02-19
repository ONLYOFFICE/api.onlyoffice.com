# GetContext

返回当前的 JS [上下文](../CDocBuilderContext/CDocBuilderContext.md)。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetContext` 方法。

## 语法

```cs
CDocBuilderContext^ GetContext();
```

## 示例

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CDocBuilder.Destroy();
```