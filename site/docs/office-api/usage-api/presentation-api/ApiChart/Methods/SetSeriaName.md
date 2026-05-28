# SetSeriaName

Sets a name to the specified chart series.

## Syntax

```javascript
expression.SetSeriaName(sName, nSeria);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | Required | string |  | The name which will be set to the specified chart series. |
| nSeria | Required | number |  | The index of the chart series. |

## Returns

boolean

## Example

Change the name of a data series in a chart in a presentation.

```javascript editor-pptx
// How do I rename the labels shown in a chart legend in a presentation?

// Update the display name for a specific data series to appear correctly in the chart legend in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetSeriaName("Projected Sales", 0);

let fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
slide.AddObject(chart);
```
