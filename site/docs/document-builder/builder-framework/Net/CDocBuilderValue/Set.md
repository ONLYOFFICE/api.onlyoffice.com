# Set

Sets an array value by its index.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Set` method is not used.

## Syntax

```cs
void Set(int nIndex, CDocBuilderValue^ sValue);
```

## Parameters

| Parameter | Type                                                         | Description                   |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| nIndex    | int                                                          | The index of the array value. |
| sValue    | [CDocBuilderValue^](../CDocBuilderValue/CDocBuilderValue.md) | The array value to be set.    |

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
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

The `default[]` postfix expression can be also used to set an array value by its index:

```cs
property CDocBuilderValue^ default[int]
```

## Example

### .Net

```cs
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
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
