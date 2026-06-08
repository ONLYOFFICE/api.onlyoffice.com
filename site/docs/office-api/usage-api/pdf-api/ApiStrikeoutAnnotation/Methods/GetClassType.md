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

Get the classification code for a strikeout annotation in a PDF

```javascript editor-pdf
// What is the internal type identifier for a strikeout annotation in a PDF?

// Find and display the class name of a strikeout annotation in a PDF

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
