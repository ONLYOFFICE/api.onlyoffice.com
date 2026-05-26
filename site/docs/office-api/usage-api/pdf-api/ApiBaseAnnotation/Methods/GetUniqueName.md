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

Get the unique identifier of an annotation in a PDF.

```javascript editor-pdf
// What is the unique name assigned to an annotation in a PDF?

// Obtain the identifier string that uniquely identifies an annotation object in a PDF.

let doc = Api.GetDocument();
let squareAnnot = Api.CreateSquareAnnot([10, 10, 160, 32]);
let page = doc.GetPage(0);
page.AddObject(squareAnnot);
console.log(`Annotation unique name is: ${squareAnnot.GetUniqueName()}`);
```
