# SetLine

Sets the outline properties to the current graphic object.

Inherited from [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md).

## Syntax

```javascript
expression.SetLine(stroke);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

Set the outline of a drawing object through the base ApiDrawing interface in a presentation.

```javascript editor-pptx
// SetLine is the base method for the outline and works for any graphic object on a slide, not only shapes.

// Add a rectangle to a slide and give it a dark solid outline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
