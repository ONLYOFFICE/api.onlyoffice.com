# SetFonts

Sets the fonts to the current theme font scheme.

## Syntax

```javascript
expression.SetFonts(mjLatin, mjEa, mjCs, mnLatin, mnEa, mnCs);
```

`expression` - A variable that represents a [ApiThemeFontScheme](../ApiThemeFontScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mjLatin | Required | string |  | The major theme font applied to the latin text. |
| mjEa | Required | string |  | The major theme font applied to the east asian text. |
| mjCs | Required | string |  | The major theme font applied to the complex script text. |
| mnLatin | Required | string |  | The minor theme font applied to the latin text. |
| mnEa | Required | string |  | The minor theme font applied to the east asian text. |
| mnCs | Required | string |  | The minor theme font applied to the complex script text. |

## Returns

This method doesn't return any data.

## Example

This example sets the fonts to the current theme font scheme.

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
