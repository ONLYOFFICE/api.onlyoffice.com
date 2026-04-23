# SetVerAxisOrientation

指定纵轴的方向。

## 语法

```javascript
expression.SetVerAxisOrientation(bIsMinMax);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bIsMinMax | 必需 | boolean |  | &lt;code&gt;true&lt;/code&gt; 值将设置纵轴的正常数据方向（从最小值到最大值）。 |

## 返回值

boolean

## 示例

此示例指定纵轴的方向。

```javascript editor-docx
// How to set an orientation of vertical axis.

// Create a chart, set its properties and its vertical axis orientation.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetVerAxisOrientation(false);
chart.SetTitle("Financial Overview", 13);
paragraph.AddDrawing(chart);
```
