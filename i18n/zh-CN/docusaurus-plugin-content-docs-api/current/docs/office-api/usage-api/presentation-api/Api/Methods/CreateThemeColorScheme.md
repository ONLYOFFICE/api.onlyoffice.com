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
| arrColors | 必需 | [ApiUniColor](../../ApiUniColor/ApiUniColor.md)[] \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md)[] \| [ApiColor](../../ApiColor/ApiColor.md)[] \| string[] |  | 称为配色方案的一组颜色。配色方案负责定义包含十二种颜色的列表。该数组必须按以下顺序恰好包含十二种颜色：accent1、accent2、accent3、accent4、accent5、accent6、dk1、dk2、folHlink、hlink、lt1、lt2。颜色也可以以 HEX 字符串形式给出（"#1a2b3c" 或 "#abc"，可带或不带前导 "#"）。 |
| sName | 必需 | string |  | 主题配色方案名称。 |

## 返回值

[ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md) \| null \| undefined

## 示例

为演示文稿的主题构建自定义调色板。

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
