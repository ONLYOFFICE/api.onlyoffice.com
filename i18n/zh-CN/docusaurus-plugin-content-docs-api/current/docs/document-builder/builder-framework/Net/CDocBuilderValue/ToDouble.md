# ToDouble (转换为双精度浮点数)

将 `CDocBuilderValue` 对象转换为双精度浮点数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToDouble` 方法。

## 语法

```cs
double ToDouble();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
double dGlobal = oGlobal.ToDouble();
CDocBuilder.Destroy();
```