# GetTheme

返回幻灯片母版的主题。

## 语法

```javascript
expression.GetTheme();
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTheme](../../ApiTheme/ApiTheme.md) \| null

## 示例

从幻灯片母版检索主题并修改其配色方案。

```javascript editor-pptx
// Access the master theme and create a new color scheme with custom RGB values.

// Apply the custom color scheme to the master theme and display the result in a chart.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const theme = master.GetTheme();
const colorScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");
theme.SetColorScheme(colorScheme);

slide.RemoveAllObjects();
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
