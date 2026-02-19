# IsDouble

如果 `CDocBuilderValue` 对象是双精度浮点数值，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsDouble` 方法。

## 语法

```cs
bool IsDouble();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bDouble = oGlobal.IsDouble();
CDocBuilder.Destroy();
```