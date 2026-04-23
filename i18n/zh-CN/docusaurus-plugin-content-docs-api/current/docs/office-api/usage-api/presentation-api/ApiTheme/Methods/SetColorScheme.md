# SetColorScheme

为当前演示文稿主题设置配色方案。

## 语法

```javascript
expression.SetColorScheme(oApiColorScheme);
```

`expression` - 表示 [ApiTheme](../ApiTheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiColorScheme | 必需 | [ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md) |  | 主题配色方案。 |

## 返回值

boolean

## 示例

此示例为当前演示文稿主题设置配色方案。

```javascript editor-pptx
// How to get a theme and set a new color scheme.

// Create a new color scheme and apply it to the slide theme.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const colorScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");

const theme = slide.GetTheme();
theme.SetColorScheme(colorScheme);

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
