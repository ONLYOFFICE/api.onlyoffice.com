# CreateNull

创建一个空值，类似于 JS 中的 `null`。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderContext.CreateNull` 方法。

## 语法

```cs
CDocBuilderValue^ CreateNull();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oNull = oContext.CreateNull();
CDocBuilder.Destroy();
```