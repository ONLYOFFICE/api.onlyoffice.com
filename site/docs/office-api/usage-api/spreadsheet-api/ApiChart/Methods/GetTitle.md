# GetTitle

Returns the chart title text.

## Syntax

```javascript
expression.GetTitle();
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string \| null

## Example

This example shows how to get the chart title text.

```javascript editor-xlsx
const worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue(2014);
worksheet.GetRange('C1').SetValue(2015);
worksheet.GetRange('A2').SetValue('Revenue');
worksheet.GetRange('B2').SetValue(200);
worksheet.GetRange('C2').SetValue(240);

const chart = worksheet.AddChart(
	'Sheet1!A1:C2',
	true, 'bar3D', 2,
	100 * 36000, 70 * 36000, 0, 0, 4, 0
);
chart.SetTitle('Financial Overview', 13);

const chartTitle = chart.GetTitle();
worksheet.GetRange('E1').SetValue('Chart Title: ' + chartTitle);

```
