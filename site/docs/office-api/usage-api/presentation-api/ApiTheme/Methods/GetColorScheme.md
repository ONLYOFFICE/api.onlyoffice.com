# GetColorScheme

Returns the color scheme of the current theme.

## Syntax

```javascript
expression.GetColorScheme();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md)

## Example

This example shows how to get the color scheme of the theme.

```javascript editor-pptx
var oPresentation = Api.GetPresentation();
var oSlide = oPresentation.GetSlideByIndex(0);
var oMaster = oPresentation.GetMaster(0);
var oTheme = oMaster.GetTheme();
var oClrScheme = oTheme.GetColorScheme();
oClrScheme.ChangeColor(0, Api.CreateRGBColor(255, 111, 61));
oClrScheme.ChangeColor(1, Api.CreateRGBColor(51, 51, 51));
oSlide.RemoveAllObjects();
var oChart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
oChart.SetVerAxisTitle("USD In Hundred Thousands", 10);
oChart.SetHorAxisTitle("Year", 11);
oChart.SetLegendPos("bottom");
oChart.SetShowDataLabels(false, false, true, false);
oChart.SetTitle("Financial Overview", 20);
oChart.SetSize(300 * 36000, 130 * 36000);
oChart.SetPosition(608400, 1267200);
oSlide.AddObject(oChart);
```
