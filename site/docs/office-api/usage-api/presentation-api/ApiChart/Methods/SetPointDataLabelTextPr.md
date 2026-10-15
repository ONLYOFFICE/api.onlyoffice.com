# SetPointDataLabelTextPr

Sets the text properties to the chart point data label.

## Syntax

```javascript
expression.SetPointDataLabelTextPr(seriesIndex, pointIndex, textPr);
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| seriesIndex | Required | number |  | The series index from the array of the data used to build the chart from. |
| pointIndex | Required | number |  | The point index from this series. |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties to apply to the data label. |

## Returns

boolean

## Example

Set the text properties for a specific chart point data label in a presentation.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle('USD In Hundred Thousands', 20);
chart.SetHorAxisTitle('Year', 22);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 26);
chart.SetSize(Api.MillimetersToEmus(300), Api.MillimetersToEmus(130));
chart.SetPosition(608400, 1267200);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(69, 90, 100)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(38, 80, 109)), 1, false);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(96);
textPr.SetBold(true);
textPr.SetItalic(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(210, 105, 30));
chart.SetPointDataLabelTextPr(1, 0, textPr);

slide.AddObject(chart);
```
