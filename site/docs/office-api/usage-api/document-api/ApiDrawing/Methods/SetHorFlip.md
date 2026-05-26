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

Mirror a shape from left to right in a document.

```javascript editor-docx
// How do I flip a shape horizontally after adding it to a document?

// Reverse the orientation of a cube shape so it faces the opposite direction in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("cube", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetHorFlip(true);
```
