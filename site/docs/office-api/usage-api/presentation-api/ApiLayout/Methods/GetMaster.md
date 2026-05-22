# GetMaster

Returns the parent slide master of the current layout.

## Syntax

```javascript
expression.GetMaster();
```

`expression` - A variable that represents a [ApiLayout](../ApiLayout.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiMaster](../../ApiMaster/ApiMaster.md)

## Example

Access the slide master from a layout in a presentation.

```javascript editor-pptx
// How do I find the parent master of a layout in a presentation?

// Retrieve the master and display its class type in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const layout = slide.GetLayout();
const master = layout.GetMaster();
const classType = master.GetClassType();

slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Class type = " + classType);
slide.AddObject(shape);
```
