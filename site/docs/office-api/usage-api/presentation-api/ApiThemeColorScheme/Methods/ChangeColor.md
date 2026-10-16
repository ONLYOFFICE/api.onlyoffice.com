# ChangeColor

Changes a color in the theme color scheme.

## Syntax

```javascript
expression.ChangeColor(nPos, oColor);
```

`expression` - A variable that represents an [ApiThemeColorScheme](../ApiThemeColorScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | Color position in the color scheme which will be changed: 0-5 - accent1-accent6, 6 - dk1, 7 - dk2, 8 - folHlink, 9 - hlink, 10 - lt1, 11 - lt2. |
| oColor | Required | [ApiColor](../../ApiColor/ApiColor.md) \| [ApiUniColor](../../ApiUniColor/ApiUniColor.md) \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md) |  | New color of the theme color scheme. A theme color is saved as its current RGB value. |

## Returns

boolean

## Example

Change a color in a theme's color scheme in a presentation.

```javascript editor-pptx
// How do I modify the color palette used by a presentation's theme?

// Access the theme's color scheme and update specific colors in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const colorScheme = theme.GetColorScheme();
colorScheme.ChangeColor(0, Api.RGB(255, 111, 61));
colorScheme.ChangeColor(1, Api.RGB(51, 51, 51));

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
