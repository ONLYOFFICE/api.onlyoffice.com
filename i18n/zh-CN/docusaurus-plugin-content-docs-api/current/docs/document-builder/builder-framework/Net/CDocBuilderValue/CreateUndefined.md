# CreateUndefined（创建未定义值）

创建一个未定义值。此方法返回当前的[上下文](../CDocBuilderContext/CDocBuilderContext.md)并调用其[CreateUndefined](../CDocBuilderContext/CreateUndefined.md)方法。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.CreateUndefined` 方法。

## 语法

```cs
static CDocBuilderValue^ CreateUndefined();
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
CValue oUndefined = oApi.CreateUndefined();
CDocBuilder.Destroy();
```