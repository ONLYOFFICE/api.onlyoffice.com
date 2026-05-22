# GetBorderStyle

Gets annotation border style.

## Syntax

```javascript
expression.GetBorderStyle();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[AnnotBorderStyle](../../Enumeration/AnnotBorderStyle.md)

## Example

Retrieve the border style of an annotation in a PDF.

```javascript editor-pdf
// What style does the border use on an annotation in a PDF?

// Determine whether an annotation's border is solid, dashed, or another style in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);
```
