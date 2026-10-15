# SetDataLabelsTextPr

Sets the text properties to the chart data labels.

## Syntax

```javascript
expression.SetDataLabelsTextPr(textPr);
```

`expression` - A variable that represents an [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| textPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties to apply to the data labels. |

## Returns

boolean

## Example

Set the text properties for all chart data labels in a document.

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const chart = Api.CreateChart('bar3D', [
	[200, 240, 280],
	[250, 260, 280]
], ['Projected Revenue', 'Estimated Costs'], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(55, 71, 79)), 0, false);
chart.SetSeriesFill(Api.CreateSolidFill(Api.RGB(21, 101, 131)), 1, false);
chart.SetVerAxisTitle('USD In Hundred Thousands', 20);
chart.SetHorAxisTitle('Year', 22);
chart.SetLegendPos('bottom');
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle('Financial Overview', 26);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(18);
textPr.SetBold(true);
textPr.SetFontFamily('Arial');
textPr.SetColor(Api.RGB(25, 80, 150));
chart.SetDataLabelsTextPr(textPr);

paragraph.AddDrawing(chart);
```
