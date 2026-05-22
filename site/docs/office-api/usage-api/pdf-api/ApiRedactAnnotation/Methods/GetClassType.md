# GetClassType

Returns a type of the ApiRedactAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRedactAnnotation](../ApiRedactAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"redactAnnot"

## Example

Identify the category of a redaction mark in a PDF.

```javascript editor-pdf
// How do I determine what kind of annotation a redaction is in a PDF?

// Check the object type of a redaction element in a PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
