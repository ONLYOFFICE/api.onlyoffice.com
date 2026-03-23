# CreateTheme

创建新的演示文稿主题。

## 语法

```javascript
expression.CreateTheme(sName, oMaster, oClrScheme, oFormatScheme, oFontScheme);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 主题名称。 |
| oMaster | 必需 | [ApiMaster](../../ApiMaster/ApiMaster.md) |  | 幻灯片母版。必需参数。 |
| oClrScheme | 必需 | [ApiThemeColorScheme](../../ApiThemeColorScheme/ApiThemeColorScheme.md) |  | 主题配色方案。必需参数。 |
| oFormatScheme | 必需 | [ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md) |  | 主题格式方案。必需参数。 |
| oFontScheme | 必需 | [ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md) |  | 主题字体方案。必需参数。 |

## 返回值

[ApiTheme](../../ApiTheme/ApiTheme.md) \| null

## 示例

此示例创建主题并将其应用于演示文稿。

```javascript editor-pptx
// How to change theme of the presentation.

// Create new theme indicating all its properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const clrScheme = Api.CreateThemeColorScheme([
	Api.CreateRGBColor(255, 111, 61),
	Api.CreateRGBColor(51, 51, 51),
	Api.CreateRGBColor(230, 179, 117),
	Api.CreateRGBColor(235, 235, 235),
	Api.CreateRGBColor(163, 21, 21),
	Api.CreateRGBColor(128, 43, 43),
	Api.CreateRGBColor(0, 0, 0),
	Api.CreateRGBColor(128, 128, 128),
	Api.CreateRGBColor(176, 196, 222),
	Api.CreateRGBColor(65, 105, 225),
	Api.CreateRGBColor(255, 255, 255),
	Api.CreateRGBColor(255, 213, 191)
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

```
