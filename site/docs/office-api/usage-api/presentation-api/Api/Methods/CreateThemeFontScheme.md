# CreateThemeFontScheme

Creates a new theme font scheme.

## Syntax

```javascript
expression.CreateThemeFontScheme(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs, sName);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mjLatin | Required | string |  | The major theme font applied to the latin text. |
| mjEa | Required | string |  | The major theme font applied to the east asian text. |
| mjCs | Required | string |  | The major theme font applied to the complex script text. |
| mnLatin | Required | string |  | The minor theme font applied to the latin text. |
| mnEa | Required | string |  | The minor theme font applied to the east asian text. |
| mnCs | Required | string |  | The minor theme font applied to the complex script text. |
| sName | Required | string |  | Theme font scheme name. |

## Returns

[ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md)

## Example

This example shows how to create a new theme font scheme.

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
const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const bgFill1 = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke1 = Api.CreateStroke(1 * 36000, fill1);
const fill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const bgFill2 = Api.CreatePatternFill("dashDnDiag", Api.CreateRGBColor(255, 111, 61), Api.CreateRGBColor(51, 51, 51));
const stroke2 = Api.CreateStroke(1 * 36000, fill2);
const fill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const bgFill3 = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke3 = Api.CreateStroke(1 * 36000, fill3);
const formatScheme = Api.CreateThemeFormatScheme([fill1, fill2, fill3], [bgFill1, bgFill2, bgFill3], [stroke1, stroke2, stroke3], "New format scheme");
const fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
const theme = Api.CreateTheme("New theme", master, clrScheme, formatScheme, fontScheme);
presentation.ApplyTheme(theme);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
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
