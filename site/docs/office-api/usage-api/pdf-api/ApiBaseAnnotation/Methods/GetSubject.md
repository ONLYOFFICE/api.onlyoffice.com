# GetSubject

Gets annotation subject.

## Syntax

```javascript
expression.GetSubject();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Create a square annotation and get its subject in a PDF document.

```javascript editor-pdf
// How to get the subject for an annotation in a PDF document?

// Get the subject and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
```
