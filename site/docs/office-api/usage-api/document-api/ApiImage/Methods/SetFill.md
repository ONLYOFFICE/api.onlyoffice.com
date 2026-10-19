# SetFill

Sets the fill formatting properties to the current graphic object.

Inherited from [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md).

## Syntax

```javascript
expression.SetFill(oFill);
```

`expression` - A variable that represents an [ApiImage](../ApiImage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the graphic object. |

## Returns

boolean

## Example

Set a solid fill on a drawing object through the base ApiDrawing interface in a document.

```javascript editor-docx
// The SetFill method works for any graphic object, including images and groups, not only shapes.

// Add a rectangle to a document and fill it with a solid blue-grey color.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, Api.CreateNoFill(), stroke);
paragraph.AddDrawing(drawing);
let fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
```
