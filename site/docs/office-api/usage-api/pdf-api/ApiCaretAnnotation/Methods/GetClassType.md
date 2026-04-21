# GetClassType

Returns a type of the ApiCaretAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiCaretAnnotation](../ApiCaretAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"caretAnnot"

## Example

Retrieve the class type of a caret annotation in a PDF document.

```javascript editor-pdf
// How to identify the class type of a caret annotation in a PDF document?

// Obtain the class type identifier of a caret annotation object in a PDF document.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
