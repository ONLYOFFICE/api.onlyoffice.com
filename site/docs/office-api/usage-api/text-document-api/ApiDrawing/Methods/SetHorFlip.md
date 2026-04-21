# SetHorFlip

Flips the current drawing horizontally.

## Syntax

```javascript
expression.SetHorFlip(bFlip);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | boolean |  | Specifies if the figure will be flipped horizontally or not. |

## Returns

boolean

## Example

Flips the drawing horizontally in a document.

```javascript editor-docx
// How to set the horizontal flip property of the shape in a document.

// Create a drawing, add text to it and flip it horizontally in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```
