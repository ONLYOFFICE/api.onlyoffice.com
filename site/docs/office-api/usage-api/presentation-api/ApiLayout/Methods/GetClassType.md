# GetClassType

Returns the type of the ApiLayout class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"layout"

## Example

Find out the class type of a layout object in a presentation.

```javascript editor-pptx
// How can I get the class type of a layout in a presentation?

// Get the class type of a layout and display it in the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);
const sType = layout.GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + sType);
slide.AddObject(shape);
```
