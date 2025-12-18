# IsEmpty（是否为空）

如果 `CDocBuilderValue` 对象为空，则返回 true。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.IsEmpty` 方法。

## 语法

```cs
bool IsEmpty();
```

## 示例

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/documentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
CContext oContext = oBuilder.GetContext();
CValue oGlobal = oContext.GetGlobal();
bool bEmpty = oGlobal.IsEmpty();
CDocBuilder.Destroy();
```