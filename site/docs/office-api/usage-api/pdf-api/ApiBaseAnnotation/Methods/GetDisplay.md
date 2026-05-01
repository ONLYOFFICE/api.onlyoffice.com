# GetDisplay

Gets annotation display type.

## Syntax

```javascript
expression.GetDisplay();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[DisplayType](../../Enumeration/DisplayType.md)

## Example

Create a square annotation and get its display in a PDF document.

```javascript editor-pdf
// How do I get the display in a PDF document?

// Get the display using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation display is: ${squareAnnot.GetDisplay()}`);
```
