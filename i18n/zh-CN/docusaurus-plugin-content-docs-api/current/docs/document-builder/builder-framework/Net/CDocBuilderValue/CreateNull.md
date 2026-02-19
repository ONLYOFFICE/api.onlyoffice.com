# CreateNull

创建一个空值。此方法返回当前的 [上下文](../CDocBuilderContext/CDocBuilderContext.md) 并调用其 [CreateNull](../CDocBuilderContext/CreateNull.md) 方法。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderValue.CreateNull` 方法。

## 语法

```cs
static CDocBuilderValue^ CreateNull();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CValue oApi = oGlobal["Api"];
CValue oNull = oApi.CreateNull();
CDocBuilder.Destroy();
```