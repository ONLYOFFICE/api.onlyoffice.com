# IsObject

如果 `CDocBuilderValue` 对象是一个对象，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsObject` 方法。

## 语法

```cs
bool IsObject();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bObject = oGlobal.IsObject();
CDocBuilder.Destroy();
```