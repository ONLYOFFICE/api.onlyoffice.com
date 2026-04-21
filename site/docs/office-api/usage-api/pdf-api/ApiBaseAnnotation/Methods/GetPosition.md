# GetPosition

Gets annotation position.

## Syntax

```javascript
expression.GetPosition();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Point](../../Enumeration/Point.md)

## Example

Create a square annotation and get its position in a PDF document.

```javascript editor-pdf
// How do I get the position in a PDF document?

// Get the position using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
