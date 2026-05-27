# Copy

Creates a copy of the specified chart.

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

Duplicate a chart and place the copy on another slide in a presentation.

```javascript editor-pptx
// How do I make a copy of a chart in a presentation?

// Clone a chart and add the duplicate to a new slide in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
    [200, 240, 280],
    [250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595);
slide.AddObject(chart);

const copyChart = chart.Copy();
const newSlide = Api.CreateSlide();
presentation.AddSlide(newSlide);
newSlide.AddObject(copyChart);
```
