# IsUndefined

如果 `CDocBuilderValue` 对象未定义，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsUndefined` 方法。

## 语法

```cs
bool IsUndefined();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bUndefined = oGlobal.IsUndefined();
CDocBuilder.Destroy();
```