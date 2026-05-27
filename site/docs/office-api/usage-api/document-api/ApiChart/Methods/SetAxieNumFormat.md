# SetAxieNumFormat

Sets the specified numeric format to the axis values.

## Syntax

```javascript
expression.SetAxieNumFormat(sFormat, sAxiePos);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | Numeric format (can be custom format). |
| sAxiePos | Required | [AxisPos](../../Enumeration/AxisPos.md) |  | Axis position in the chart. |

## Returns

boolean

## Example

Format the numbers displayed on a chart axis in a document.

```javascript editor-docx
// How do I control how axis values are formatted on a chart in a document?

// Display axis labels with a fixed decimal precision to improve chart readability in a document.

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
chart.SetAxieNumFormat("0.00", "left");
paragraph.AddDrawing(chart);
```
