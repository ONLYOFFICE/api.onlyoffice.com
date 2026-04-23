# SetFonts

为当前主题字体方案设置字体。

## 语法

```javascript
expression.SetFonts(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs);
```

`expression` - 表示 [ApiThemeFontScheme](../ApiThemeFontScheme.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mjLatin | 必需 | string |  | 应用于拉丁文本的主要主题字体。 |
| mjEa | 必需 | string |  | 应用于东亚文本的主要主题字体。 |
| mjCs | 必需 | string |  | 应用于复杂脚本文本的主要主题字体。 |
| mnLatin | 必需 | string |  | 应用于拉丁文本的次要主题字体。 |
| mnEa | 必需 | string |  | 应用于东亚文本的次要主题字体。 |
| mnCs | 必需 | string |  | 应用于复杂脚本文本的次要主题字体。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例为当前主题字体方案设置字体。

```javascript editor-pptx
// How to set fonts to a theme.

// Retrieve theme and set its font theme by adding fonts.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const fontScheme = theme.GetFontScheme();
fontScheme.SetFonts("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("New font scheme was set to this slide.");
slide.RemoveAllObjects();
slide.AddObject(shape);

```
