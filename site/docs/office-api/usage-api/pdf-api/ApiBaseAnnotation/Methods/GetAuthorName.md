# GetAuthorName

Gets annotation author name.

## Syntax

```javascript
expression.GetAuthorName();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Create a square annotation and get its author name in a PDF document.

```javascript editor-pdf
// How do I get the author name in a PDF document?

// Get the author name using an annotation object in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation author name is: ${squareAnnot.GetAuthorName()}`);
```
