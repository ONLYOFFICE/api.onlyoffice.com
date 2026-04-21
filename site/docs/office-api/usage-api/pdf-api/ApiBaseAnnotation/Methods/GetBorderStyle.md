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

Create a square annotation and get its border style in a PDF document.

```javascript editor-pdf
// How do I get the border style in a PDF document?

// Get the border style using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border style is: ${squareAnnot.GetBorderStyle()}`);
```
