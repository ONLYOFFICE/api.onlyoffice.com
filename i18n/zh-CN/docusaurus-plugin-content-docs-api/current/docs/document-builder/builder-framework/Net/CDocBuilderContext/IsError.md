# IsError

检查JS中的错误。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.IsError` 方法。

## 语法

```cs
bool IsError();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
bool bError = oContext.IsError();
CDocBuilder.Destroy();
```