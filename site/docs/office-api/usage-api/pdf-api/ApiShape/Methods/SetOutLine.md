# SetOutLine

Sets the outline properties to the current graphic object.

Inherited from [ApiDrawing.SetOutLine](../../ApiDrawing/Methods/SetOutLine.md).

## Syntax

```javascript
expression.SetOutLine(stroke);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the graphic object outline. |

## Returns

boolean

## Example

Add a border to a shape on a page in a PDF form.

```javascript editor-pdf
// Apply a colored stroke as the shape's outline using the drawing's outline setter.

// Create a shape, build a stroke, and set it as the outline with SetOutLine.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
shape.SetOutLine(outline);
```
