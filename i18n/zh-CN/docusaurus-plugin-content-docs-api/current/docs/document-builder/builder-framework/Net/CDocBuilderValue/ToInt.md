# ToInt（转换为整数）

将 `CDocBuilderValue` 对象转换为整数。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.ToInt` 方法。

## 语法

```cs
int ToInt();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
int nGlobal = oGlobal.ToInt();
CDocBuilder.Destroy();
```