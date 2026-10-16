# CreateThemeColorScheme

Creates a new theme color scheme.

## Syntax

```javascript
expression.CreateThemeColorScheme(arrColors, sName);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrColors | Required | [ApiUniColor](../../ApiUniColor/ApiUniColor.md)[] \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)[] \| [ApiColor](../../ApiColor/ApiColor.md)[] \| string[] |  | Set of colors which are referred to as a color scheme. The color scheme is responsible for defining a list of twelve colors. The array must hold exactly twelve colors in this order: accent1, accent2, accent3, accent4, accent5, accent6, dk1, dk2, folHlink, hlink, lt1, lt2. A color may also be given as a HEX string ("#1a2b3c" or "#abc", with or without the leading "#"). |
| sName | Required | string |  | Theme color scheme name. |

## Returns

[ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md) \| null \| undefined

## Example

Build a custom color palette for a presentation's theme in a presentation.

```javascript editor-pptx
// How do I define custom colors for the presentation theme in a presentation?

// Create a named color scheme with multiple custom colors and assign it to the presentation in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const clrScheme = Api.CreateThemeColorScheme([
	Api.RGB(255, 111, 61), Api.RGB(51, 51, 51), Api.RGB(230, 179, 117),
	Api.RGB(235, 235, 235), Api.RGB(163, 21, 21), Api.RGB(128, 43, 43),
	Api.RGB(0, 0, 0), Api.RGB(128, 128, 128), Api.RGB(176, 196, 222),
	Api.RGB(65, 105, 225), Api.RGB(255, 255, 255), Api.RGB(255, 213, 191)
], "New color scheme");
const theme = slide.GetTheme();
theme.SetColorScheme(clrScheme);

const chart = Api.CreateChart("3DColumnClustered", [
	[200, 240, 280],
	[250, 260, 280]
], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
chart.SetVerAxisTitle("USD In Hundred Thousands", 20);
chart.SetHorAxisTitle("Year", 22);
chart.SetLegendPos("bottom");
chart.SetShowDataLabels(false, false, true, false);
chart.SetTitle("Financial Overview", 40);
chart.SetSize(300 * 36000, 130 * 36000);
chart.SetPosition(608400, 1267200);
slide.AddObject(chart);
```
