# SetTitleFill

Sets the fill to the chart title.

## Syntax

```javascript
expression.SetTitleFill(oFill);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the title. |

## Returns

boolean

## Example

This example sets the fill to the chart title.

```javascript editor-docx
// How to color a chart title.

// Create a chart, set its properties and its title color.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
paragraph.AddDrawing(chart);
let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(128, 128, 128));
chart.SetTitle("Financial Overview", 13);
chart.SetTitleFill(fill);
```
