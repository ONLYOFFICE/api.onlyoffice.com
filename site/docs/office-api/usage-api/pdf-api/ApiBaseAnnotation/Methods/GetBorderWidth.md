# GetBorderWidth

Gets annotation border width.

## Syntax

```javascript
expression.GetBorderWidth();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[pt](../../Enumeration/pt.md)

## Example

Retrieve the border width measurement of an annotation in a PDF.

```javascript editor-pdf
// How thick is the border around an annotation in a PDF?

// Check the line thickness of an annotation's border in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation border width is: ${squareAnnot.GetBorderWidth()}`);
```
