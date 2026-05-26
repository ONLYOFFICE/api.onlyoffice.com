# SetVertFlip

Flips the current drawing vertically.

## Syntax

```javascript
expression.SetVertFlip(bFlip);
```

`expression` - A variable that represents a [ApiDrawing](../ApiDrawing.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | Required | boolean |  | Specifies if the figure will be flipped vertically or not. |

## Returns

boolean

## Example

Flip a shape upside down along its vertical axis in a document.

```javascript editor-docx
// How do I mirror a drawing vertically in a document?

// Invert a shape's orientation to create a reflected effect in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetVertFlip(true);
```
