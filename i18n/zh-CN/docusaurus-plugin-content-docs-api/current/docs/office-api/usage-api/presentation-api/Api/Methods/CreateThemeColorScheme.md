# CreateThemeColorScheme

创建新的主题配色方案。

## 语法

```javascript
expression.CreateThemeColorScheme(arrColors, sName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrColors | 必需 | [ApiUniColor](../../ApiUniColor/ApiUniColor.md)[] \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)[] \| [ApiColor](../../ApiColor/ApiColor.md)[] |  | 一组称为配色方案的颜色。配色方案负责定义十二种颜色的列表。数组应包含以下颜色序列：2 种深色、2 种浅色、6 种主要颜色、超链接颜色和已访问超链接颜色。 |
| sName | 必需 | string |  | 主题配色方案名称。 |

## 返回值

[ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md)

## 示例

此示例演示如何创建新的主题配色方案。

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
