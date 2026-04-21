# GetBorderColor

Gets annotation border color.

## Syntax

```javascript
expression.GetBorderColor();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Create a square annotation and get its border color in a PDF document.

```javascript editor-pdf
// How to get the border color for an annotation in a PDF document?

// Get the border color and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border color is: ${squareAnnot.GetBorderColor()}`);
```
