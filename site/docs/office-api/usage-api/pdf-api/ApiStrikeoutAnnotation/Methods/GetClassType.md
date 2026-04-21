# GetClassType

Returns a type of the ApiStrikeoutAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiStrikeoutAnnotation](../ApiStrikeoutAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"strikeoutAnnot"

## Example

Retrieve the class type of a strikeout annotation in a PDF document.

```javascript editor-pdf
// How to identify the class type of a strikeout annotation in a PDF document?

// Obtain the class type identifier of a strikeout annotation object in a PDF document.

let doc = Api.GetDocument();
let caretAnnot = Api.CreateCaretAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(caretAnnot);
console.log(`Annot class type is: ${caretAnnot.GetClassType()}`);
```
