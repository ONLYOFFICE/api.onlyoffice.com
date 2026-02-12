# SetVerAxisOrientation

Specifies the vertical axis orientation.

## Syntax

```javascript
expression.SetVerAxisOrientation(bIsMinMax);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bIsMinMax | Required | boolean |  | The &lt;code&gt;true&lt;/code&gt; value will set the normal data direction for the vertical axis (from minimum to maximum). |

## Returns

boolean

## Example

This example specifies the vertical axis orientation.

```javascript editor-pptx
// How to set an orientation of vertical axis.

// Create a chart, set its properties and its vertical axis orientation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
chart.SetTitle("Financial Overview", 13);

let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
chart.SetSeriesFill(fill, 0, false);
fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
chart.SetSeriesFill(fill, 1, false);
const stroke = Api.CreateStroke(0.5 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51)));
chart.SetTitleOutLine(stroke);
slide.AddObject(chart);

```
