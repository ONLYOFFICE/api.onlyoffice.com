# Set

通过索引设置数组的值。

> 请注意，在 `.docbuilder` 文件中不使用 `CDocBuilderValue.Set` 方法。

## 语法

```cs
void Set(int nIndex, CDocBuilderValue^ sValue);
```

## 参数

| 参数    | 类型                                                         | 描述                 |
| ------- | ------------------------------------------------------------ | -------------------- |
| nIndex  | int                                                          | 数组值的索引。       |
| sValue  | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | 要设置的数组值。     |

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
CValue oChart =  oApi.Call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
aCharts.Set(1, oChart);
CDocBuilder.Destroy();
```

也可以使用 `default[]` 后缀表达式通过索引设置数组值：

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
CValue oChart =  oApi.Call("CreateChart", "bar3D", [
  [200, 240, 280],
  [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
aCharts[1, oChart];
CDocBuilder.Destroy();
```