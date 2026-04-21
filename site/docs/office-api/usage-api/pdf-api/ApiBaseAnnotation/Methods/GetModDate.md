# GetModDate

Gets annotation last modification date.

## Syntax

```javascript
expression.GetModDate();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Create a square annotation and get its mod date in a PDF document.

```javascript editor-pdf
// How can I get the mod date using an annotation in a PDF document?

// Get the mod date for an annotation in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation mod date is: ${squareAnnot.GetModDate()}`);
```
