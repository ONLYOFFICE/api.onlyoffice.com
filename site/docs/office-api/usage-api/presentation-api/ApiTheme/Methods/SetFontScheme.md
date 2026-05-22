# SetFontScheme

Sets the font scheme to the current presentation theme.

## Syntax

```javascript
expression.SetFontScheme(oApiFontScheme);
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFontScheme | Required | [ApiThemeFontScheme](../../ApiThemeFontScheme/ApiThemeFontScheme.md) |  | Theme font scheme. |

## Returns

boolean

## Example

Apply a new font scheme to a presentation's theme.

```javascript editor-pptx
// How do I change the fonts used throughout a presentation?

// Create a custom font scheme and assign it to the theme in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = Api.CreateThemeFontScheme("Arial", "Noto Sans Simplified Chinese", "Arabic", "Times New Roman", "Noto Serif Simplified Chinese", "Arabic", "New font scheme");
const theme = slide.GetTheme();
theme.SetFontScheme(fontScheme);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph with a new font scheme set.");
docContent.Push(paragraph);
slide.AddObject(shape);
```
