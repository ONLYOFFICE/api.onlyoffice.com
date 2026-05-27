# Copy

Copies the current chart.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Copy();
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiChart](../../ApiChart/ApiChart.md)

## Example

Duplicate a chart and add the copy to the same paragraph in a document.

```javascript editor-docx
// How do I make a copy of a chart in a document?

// Clone a chart so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
paragraph.AddDrawing(chart);

let copyChart = chart.Copy();
paragraph.AddDrawing(copyChart);
```
