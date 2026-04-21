# GetClassType

Returns a type of the ApiUnderlineAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiUnderlineAnnotation](../ApiUnderlineAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"underlineAnnot"

## Example

Find out the class type of an underline annotation object in a PDF document.

```javascript editor-pdf
// How can I get the class type of an underline annotation in a PDF document?

// Get the class type of an underline annotation and display it in the PDF.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
