# GetGlobal

返回当前上下文的全局对象。

> 请注意，对于 `.docbuilder` 文件，不使用 `CDocBuilderContext.GetGlobal` 方法。

## 语法

```cs
CDocBuilderValue^ GetGlobal();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
CDocBuilder.Destroy();
```