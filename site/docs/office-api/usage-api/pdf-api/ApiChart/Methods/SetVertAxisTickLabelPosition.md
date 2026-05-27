# SetVertAxisTickLabelPosition

Spicifies tick labels position for the vertical axis.

## Syntax

```javascript
expression.SetVertAxisTickLabelPosition(sTickLabelPosition);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTickLabelPosition | Required | [TickLabelPosition](../../Enumeration/TickLabelPosition.md) |  | The type for the position of chart vertical tick labels. |

## Returns

boolean

## Example

Position tick labels on a chart's vertical axis in a PDF.

```javascript editor-pdf
// How do I place tick labels on the vertical axis of a chart in a PDF?

// Set where numbers appear on the vertical axis of a chart in a PDF.

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
chart.SetVertAxisTickLabelPosition("high");
chart.SetPosition(608400, 1267200);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
page.AddObject(chart);
```
