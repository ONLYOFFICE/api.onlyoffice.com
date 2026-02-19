# GetLength

如果 `CDocBuilderValue` 对象是数组/类型化数组，则返回其长度。否则，返回 0。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.GetLength` 方法。

## 语法

```cs
unsigned int GetLength();
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
CValue aCharts = oDocument.Call("GetAllCharts");
unsigned int nLength = aCharts.GetLength();
CDocBuilder.Destroy();
```