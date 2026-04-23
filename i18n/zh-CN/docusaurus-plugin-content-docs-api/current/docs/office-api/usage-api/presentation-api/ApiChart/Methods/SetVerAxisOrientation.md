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

```javascript editor-pptx
// How to set an orientation of vertical axis.

// Create a chart, set its properties and its vertical axis orientation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetTitle("Financial Overview", 13);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
const stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
chart.SetTitleOutLine(stroke);
slide.AddObject(chart);

```
