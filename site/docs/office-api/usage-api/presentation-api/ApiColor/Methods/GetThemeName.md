# GetThemeName

Gets the theme color name if the color is a theme color.

## Syntax

```javascript
expression.GetThemeName();
```

`expression` - A variable that represents a [ApiColor](../ApiColor.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SchemeColorId](../../Enumeration/SchemeColorId.md) \| null

## Example

This example shows how to get the theme color name used in a shape fill.

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const themeColor = Api.ThemeColor('accent1');
const fill = Api.CreateSolidFill(themeColor);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText('Theme name: ' + themeColor.GetThemeName());
paragraph.AddElement(run);
slide.AddObject(shape);

```
