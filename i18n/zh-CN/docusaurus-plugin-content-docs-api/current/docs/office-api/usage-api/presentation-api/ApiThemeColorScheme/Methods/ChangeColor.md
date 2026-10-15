# ChangeColor

更改主题配色方案中的颜色。

## 语法

```javascript
expression.ChangeColor(nPos, oColor);
```

`expression` - 表示 [ApiThemeColorScheme](../ApiThemeColorScheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | 必需 | number |  | 配色方案中要更改的颜色位置：0-5 - accent1-accent6，6 - dk1，7 - dk2，8 - folHlink，9 - hlink，10 - lt1，11 - lt2。 |
| oColor | 必需 | [ApiColor](../../ApiColor/ApiColor.md) \| [ApiUniColor](../../ApiUniColor/ApiUniColor.md) \| [ApiRGBColor](../../ApiRGBColor/ApiRGBColor.md) |  | 主题配色方案的新颜色。主题颜色将保存为其当前 RGB 值。 |

## 返回值

boolean

## 示例

更改演示文稿中主题配色方案中的颜色。

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
