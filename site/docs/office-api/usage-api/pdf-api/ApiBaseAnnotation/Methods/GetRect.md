# GetRect

Sets annotation rect.

## Syntax

```javascript
expression.GetRect();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md)

## Example

Create a square annotation and get its rect in a PDF document.

```javascript editor-pdf
// How to get the rect for an annotation in a PDF document?

// Get the rect and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation rect is: ${squareAnnot.GetRect()}`);
```
