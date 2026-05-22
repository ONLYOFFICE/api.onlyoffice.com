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

Apply a numeric format to the values of a chart series in a document.

```javascript editor-docx
// How do I control how numbers are displayed in a chart series in a document?

// Format data values with decimal places so the chart communicates precision consistently in a document.

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
chart.SetSeriaNumFormat("0.00", 0);
paragraph.AddDrawing(chart);
```
