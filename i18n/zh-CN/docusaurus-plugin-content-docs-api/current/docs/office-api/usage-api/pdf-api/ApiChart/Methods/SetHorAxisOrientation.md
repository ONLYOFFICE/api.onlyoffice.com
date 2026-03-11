# SetHorAxisOrientation

指定横轴的方向。

## 语法

```javascript
expression.SetHorAxisOrientation(bIsMinMax);
```

`expression` - 表示 [ApiChart](../ApiChart.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bIsMinMax | 必需 | boolean |  | &lt;code&gt;true&lt;/code&gt; 值将设置横轴的正常数据方向（从最小值到最大值）。 |

## 返回值

boolean

## 示例

如何设置水平轴的方向。

```javascript editor-pdf
// Create a chart, set its properties and its horizontal axis orientation.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetTitle("Financial Overview", 13);
chart.SetSize(150 * 36000, 65 * 36000);
chart.SetHorAxisOrientation(false);
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);

```
