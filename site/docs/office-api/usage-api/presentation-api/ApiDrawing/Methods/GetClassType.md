# GetClassType

Returns the type of the ApiDrawing class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"drawing"

## Example

Identify the type of a drawing object in a presentation.

```javascript editor-pptx
// How do I find out what kind of object a shape is in a presentation?

// Get the name and display the type category of a drawing object in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetSize(300 * 36000, 130 * 36000);
slide.AddObject(drawing);

const aDrawings = slide.GetAllDrawings();
const sType = aDrawings[0].GetClassType();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class Type = " + sType);
```
