# CreateThemeColorScheme

Creates a new theme color scheme.

## Syntax

```javascript
expression.CreateThemeColorScheme(arrColors, sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrColors | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md)[] \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)[] |  | Set of colors which are referred to as a color scheme. The color scheme is responsible for defining a list of twelve colors. The array should contain a sequence of colors: 2 dark, 2 light, 6 primary, a color for a hyperlink and a color for the followed hyperlink. |
| sName | Required | string |  | Theme color scheme name. |

## Returns

[ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md)

## Example

This example shows how to create a new theme color scheme.

```javascript editor-pptx
// How to change color scheme of the theme.

// Add color scheme to the theme.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const clrScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");
const theme = slide.GetTheme();
theme.SetColorScheme(clrScheme);

const chart = Api.CreateChart("bar3D", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 10);
chart.SetHorAxisTitle("Year", 11);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 20);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
slide.AddObject(chart);

```
