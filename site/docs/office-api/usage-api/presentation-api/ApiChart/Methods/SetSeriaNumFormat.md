# SetSeriaNumFormat

Sets the specified numeric format to the chart series.

## Syntax

```javascript
expression.SetSeriaNumFormat(sFormat, nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | Numeric format (can be custom format). |
| nSeria | Required | Number |  | Series index. |

## Returns

boolean

## Example

This example sets the specified numeric format to the chart series.

```javascript editor-pptx
// How to set the "0.00" numeric format to the chart seria.

// Create a chart, set its properties and its series numeric format.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24, ["0", "0.00"]);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetSeriaNumFormat("0.00", 0);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
