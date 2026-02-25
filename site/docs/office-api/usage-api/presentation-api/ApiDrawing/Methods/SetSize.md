# SetSize

Sets the size of the object (image, shape, chart) bounding box.

## Syntax

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | Required | [EMU](../../Enumeration/EMU.md) |  | The object width measured in English measure units. |
| nHeight | Required | [EMU](../../Enumeration/EMU.md) |  | The object height measured in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets size to the shape.

```javascript editor-pptx playground
// How to resize a drawing.

// Get a shape object from a slide and set its size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
