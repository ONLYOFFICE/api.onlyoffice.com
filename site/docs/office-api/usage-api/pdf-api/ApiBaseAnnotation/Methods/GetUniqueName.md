# GetUniqueName

Gets annotation unique name.

## Syntax

```javascript
expression.GetUniqueName();
```

`expression` - A variable that represents a [ApiBaseAnnotation](../ApiBaseAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Create a square annotation and get its unique name in a PDF document.

```javascript editor-pdf
// How to get the unique name for an annotation in a PDF document?

// Get the unique name and display the result in a PDF document.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```
