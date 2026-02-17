# GetVersion (获取版本)

返回 ONLYOFFICE 文档构建器引擎版本。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilder.GetVersion` 方法。

## 语法

```cs
String^ GetVersion();
```

## 示例

### .Net

``` cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
string sVersion = oBuilder.GetVersion();
CDocBuilder.Destroy();
```