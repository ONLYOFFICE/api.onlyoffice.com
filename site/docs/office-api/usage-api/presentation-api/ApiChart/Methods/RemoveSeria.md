# RemoveSeria

Removes the specified series from the current chart.

## Syntax

```javascript
expression.RemoveSeria(nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example shows how to remove the specified series from the current chart.

```javascript editor-pptx
// How to delete a chart seria indicating its index.

// Create a chart then delete a seria from it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.RemoveSeria(1);
chart.SetTitle("The Estimated Costs series was removed from the current chart.");
const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 0, false);
slide.AddObject(chart);

```
