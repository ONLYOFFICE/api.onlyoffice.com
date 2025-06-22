# GetFormatScheme

Returns the format scheme of the current theme.

## Syntax

```javascript
expression.GetFormatScheme();
```

`expression` - A variable that represents a [ApiTheme](../ApiTheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiThemeFormatScheme](../../ApiThemeFormatScheme/ApiThemeFormatScheme.md)

## Example

This example shows how to get the format scheme of the theme.

```javascript editor-pptx
// How to get a format scheme from a theme.

// Get a format scheme and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const theme = master.GetTheme();
const formatScheme = theme.GetFormatScheme();
const type = formatScheme.GetClassType();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + type);
slide.AddObject(shape);

```
