# GetSchemeName

Returns the name of the current theme font scheme.

## Syntax

```javascript
expression.GetSchemeName();
```

`expression` - A variable that represents an [ApiThemeFontScheme](../ApiThemeFontScheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Show the name of a theme font scheme in a presentation.

```javascript editor-pptx
// Identify the font scheme that the presentation theme uses.

// Get the name of the font scheme and write it into a shape on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fontScheme = presentation.GetMaster(0).GetTheme().GetFontScheme();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 300 * 36000, 50 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.GetContent().GetElement(0).AddText("Font scheme: " + fontScheme.GetSchemeName());
slide.AddObject(shape);
```
