# GetClassType

Returns the type of the ApiThemeFormatScheme class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiThemeFormatScheme](../ApiThemeFormatScheme.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"themeFormatScheme"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx
// How to get a class type of ApiThemeFormatScheme.

// Retrieve class type of ApiThemeFormatScheme object and insert it to the slide.

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
