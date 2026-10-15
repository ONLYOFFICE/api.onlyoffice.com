# GetMajorFont

Returns the major theme font of the current theme font scheme.

## Syntax

```javascript
expression.GetMajorFont(script);
```

`expression` - A variable that represents an [ApiThemeFontScheme](../ApiThemeFontScheme.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| script | Optional | [ThemeFontScript](../../Enumeration/ThemeFontScript.md) | "latin" | The script the font is applied to. |

## Returns

string \| null \| undefined

## Example

Write a heading in the major font of a presentation theme.

```javascript editor-pptx
// Read the heading font of a theme font scheme to use it for new text.

// Get the major latin font of the font scheme and apply it to the text of a shape.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = presentation.GetMaster(0).GetTheme().GetFontScheme();
const majorFont = fontScheme.GetMajorFont("latin");

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const run = shape.GetContent().GetElement(0).AddText("Heading font: " + majorFont);
run.SetFontFamily(majorFont);
run.SetFontSize(48);
slide.AddObject(shape);
```
