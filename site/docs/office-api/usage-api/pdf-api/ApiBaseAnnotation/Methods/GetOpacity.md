# GetOpacity

Gets annotation opacity.

## Syntax

```javascript
expression.GetOpacity();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the transparency level of an annotation in a PDF.

```javascript editor-pdf
// How transparent is an annotation in a PDF?

// Check the opacity value that controls how see-through an annotation appears in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation opacity is: ${squareAnnot.GetOpacity()}`);
```
