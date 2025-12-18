# Get（获取）

通过索引返回数组值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Get` 方法。

## 语法

```cs
CDocBuilderValue^ Get(int nIndex);
```

## 参数

| 参数   | 类型 | 描述                 |
| ------ | ---- | -------------------- |
| nIndex | int  | 数组值的索引。       |

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
CValue oChart = aCharts.Get(1);
CDocBuilder.Destroy();
```

也可以使用 `default[]` 后缀表达式通过索引获取数组值：

```cs
property CDocBuilderValue^ default[int]
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
CValue oChart = aCharts[1];
CDocBuilder.Destroy();
```