# ToString（转换为字符串）

将 `CDocBuilderValue` 对象转换为字符串。

> 请注意，在 `.docbuilder` 文件中，不使用 `CDocBuilderValue.ToString` 方法。

## 语法

```cs
String^ ToString() override;
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
string sGlobal = oGlobal.ToString();
CDocBuilder.Destroy();
```