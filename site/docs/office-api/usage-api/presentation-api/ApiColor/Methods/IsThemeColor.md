# IsThemeColor

Returns true if the color is a theme color.

## Syntax

```javascript
expression.IsThemeColor();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Determine whether a fill color comes from the design theme or is a custom color in a presentation.

```javascript editor-pptx
// How do I check if a color is a theme color or a standalone color in a presentation?

// Verify if a fill uses a theme-based color in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const hexColor = Api.HexColor('#FF0000');
const themeColor = Api.ThemeColor('accent1');

const fill = Api.CreateSolidFill(hexColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Is hexColor a theme color? ' + hexColor.IsThemeColor());
run.AddText('\nIs themeColor a theme color? ' + themeColor.IsThemeColor());
paragraph.AddElement(run);
slide.AddObject(shape);
```
