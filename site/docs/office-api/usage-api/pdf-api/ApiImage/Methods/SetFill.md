# SetFill

Sets the fill formatting properties to the current graphic object.

Inherited from [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md).

## Syntax

```javascript
expression.SetFill(fill);
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the graphic object. |

## Returns

boolean

## Example

Set a solid fill on a drawing object through the base ApiDrawing interface in a PDF.

```javascript editor-pdf
// The SetFill method works for any graphic object in a PDF, not only shapes.

// Add a rectangle to a PDF page and fill it with a solid blue-grey color.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 50 * 36000, 50 * 36000, Api.CreateNoFill(), stroke);
drawing.SetPosition(2000000, 1000000);
page.AddObject(drawing);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
```
