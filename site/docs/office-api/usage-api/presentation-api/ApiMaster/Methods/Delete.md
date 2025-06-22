# Delete

Deletes the specified object from the parent if it exists.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiMaster](../ApiMaster.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example deletes the specified object from the parent if it exists.

```javascript editor-pptx
// How to delete a master.

// Remove a master from a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const master = presentation.GetMaster(0);

const countBefore = presentation.GetMastersCount();
master.Delete();
const countAfter = presentation.GetMastersCount();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Number of masters before deletion: " + countBefore);
paragraph.AddLineBreak();
paragraph.AddText("Number of masters after deletion: " + countAfter);
slide.RemoveAllObjects();
slide.AddObject(shape);

```
