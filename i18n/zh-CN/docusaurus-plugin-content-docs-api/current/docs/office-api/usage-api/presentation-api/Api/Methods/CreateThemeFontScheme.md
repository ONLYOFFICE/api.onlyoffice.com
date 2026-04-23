# CreateThemeFontScheme

创建新的主题字体方案。

## 语法

```javascript
expression.CreateThemeFontScheme(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs, sName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mjLatin | 必需 | string |  | 应用于拉丁文本的主要主题字体。 |
| mjEa | 必需 | string |  | 应用于东亚文本的主要主题字体。 |
| mjCs | 必需 | string |  | 应用于复杂脚本文本的主要主题字体。 |
| mnLatin | 必需 | string |  | 应用于拉丁文本的次要主题字体。 |
| mnEa | 必需 | string |  | 应用于东亚文本的次要主题字体。 |
| mnCs | 必需 | string |  | 应用于复杂脚本文本的次要主题字体。 |
| sName | 必需 | string |  | 主题字体方案名称。 |

## 返回值

[ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md)

## 示例

此示例演示如何创建新的主题字体方案。

```javascript editor-pptx
// How to change font scheme of the theme.

// Add font scheme to the theme.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const clrScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51), Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235), Api.CreateRGBColor(163, 21, 21), Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0), Api.CreateRGBColor(128, 128, 128), Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225), Api.CreateRGBColor(255, 255, 255), Api.CreateRGBColor(255, 213, 191)
], "New color scheme");
const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const bgFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke1 = Api.CreateStroke(1 * 36000, fill1);
const fill2 = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
const bgFill2 = Api.CreatePatternFill("dashDnDiag", Api.RGB(255, 111, 61), Api.RGB(51, 51, 51));
const stroke2 = Api.CreateStroke(1 * 36000, fill2);
const fill3 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const bgFill3 = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke3 = Api.CreateStroke(1 * 36000, fill3);
const formatScheme = Api.CreateThemeFormatScheme([fill1, fill2, fill3], [bgFill1, bgFill2, bgFill3], [stroke1, stroke2, stroke3], "New format scheme");
const fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
const theme = Api.CreateTheme("New theme", master, clrScheme, formatScheme, fontScheme);
presentation.ApplyTheme(theme);

const fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This text is written in the Times New Roman font.");
slide.RemoveAllObjects();
slide.AddObject(shape);

```
