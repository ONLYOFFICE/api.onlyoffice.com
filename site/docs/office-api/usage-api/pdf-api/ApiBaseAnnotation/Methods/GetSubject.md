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

Read the subject line of an annotation in a PDF.

```javascript editor-pdf
// What is the subject text assigned to an annotation in a PDF?

// Extract the subject property from an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
squareAnnot.SetSubject("Annot subject");
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation subject is: ${squareAnnot.GetSubject()}`);
```
