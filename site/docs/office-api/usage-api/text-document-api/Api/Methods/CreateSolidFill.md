# CreateSolidFill

Creates a solid fill to apply to the object using a selected solid color as the object background.

## Syntax

```javascript
expression.CreateSolidFill(color);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The color used for the element fill. |

## Returns

[ApiFill](../../ApiFill/ApiFill.md)

## Example

Create a solid fill in a document.

```javascript editor-docx
// Create a solid fill to apply to the shape using the selected solid color as the shape background in a document.

// How to create the fill object which represents a solid fill and apply it to the shape class in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("roundRect", 5930900, 395605, fill, stroke);
paragraph.AddDrawing(shape);
```
