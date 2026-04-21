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

Find out the class type of a redact annotation object in a PDF document.

```javascript editor-pdf
// How can I get the class type of a redact annotation in a PDF document?

// Get the class type of a redact annotation and display it in the PDF.

let doc = Api.GetDocument();
let redactAnnot = Api.CreateRedactAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(redactAnnot);
console.log(`Annot class type is: ${redactAnnot.GetClassType()}`);
```
