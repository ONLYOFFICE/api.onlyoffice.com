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

Get the position coordinates of an annotation in a PDF.

```javascript editor-pdf
// What are the horizontal and vertical coordinates of an annotation in a PDF?

// Retrieve the X and Y position values from an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
let pos = squareAnnot.GetPosition();
console.log(`Annot position x: ${pos.x}, y: ${pos.y}`);
```
