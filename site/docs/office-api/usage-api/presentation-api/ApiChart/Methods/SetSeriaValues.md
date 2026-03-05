# SetSeriaValues

Sets values to the specified chart series.

## Syntax

```javascript
expression.SetSeriaValues(aValues, nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| aValues | Required | number[] |  | The array of the data which will be set to the specified chart series. |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

This example sets values to the specified chart series.

```javascript editor-pptx
// How to set values to the specified ApiChart object.

// Create a chart, set its properties and its series values.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetSeriaValues([260, 270, 300], 1);
chart.SetShowPointDataLabel(1, 0, false, false, true, false);
chart.SetShowPointDataLabel(1, 1, false, false, true, false);
chart.SetShowPointDataLabel(1, 2, false, false, true, false);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);

```
