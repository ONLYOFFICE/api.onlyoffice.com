# CreateThemeFormatScheme

创建新的主题格式方案。

## 语法

```javascript
expression.CreateThemeFormatScheme(arrFill, arrBgFill, arrLine, sName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arrFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md)[] |  | 此数组包含填充样式。它应包含细微、中等和强烈填充。 |
| arrBgFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md)[] |  | 此数组包含背景填充样式。它应包含细微、中等和强烈填充。 |
| arrLine | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md)[] |  | 此数组包含线条样式。它应包含细微、中等和强烈线条。 |
| sName | 必需 | string |  | 主题格式方案名称。 |

## 返回值

[ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md)

## 示例

此示例演示如何创建新的主题格式方案。

```javascript editor-pptx
// How to change theme format of the theme.

// Add theme format to the theme.

const presentation = Api.GetPresentation();
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

```
