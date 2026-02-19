# Clear（清除）

清除 `CDocBuilderValue` 对象。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Clear` 方法。

## 语法

```cs
void Clear();
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
CValue oDocument = oApi.Call("GetDocument");
oDocument.Clear();
CDocBuilder.Destroy();
```