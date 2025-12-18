# ToBool（转换为布尔值）

将 `CDocBuilderValue` 对象转换为布尔值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToBool` 方法。

## 语法

```cs
bool ToBool();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bGlobal = oGlobal.ToBool();
CDocBuilder.Destroy();
```