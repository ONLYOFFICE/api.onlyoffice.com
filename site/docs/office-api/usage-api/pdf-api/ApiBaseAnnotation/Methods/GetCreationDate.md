# GetCreationDate

Gets annotation creation date.

## Syntax

```javascript
expression.GetCreationDate();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Create a square annotation and get its creation date in a PDF document.

```javascript editor-pdf
// How to get the creation date for an annotation in a PDF document?

// Get the creation date and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation creation date is: ${squareAnnot.GetCreationDate()}`);
```
