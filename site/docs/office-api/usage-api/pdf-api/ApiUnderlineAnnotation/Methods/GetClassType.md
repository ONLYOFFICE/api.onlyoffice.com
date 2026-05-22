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

Check what type of markup is applied to text in a PDF.

```javascript editor-pdf
// How do I find out what type of annotation mark has been used in a PDF?

// Determine the kind of highlight or underline effect on text in a PDF.

let doc = Api.GetDocument();
let strikeoutAnnot = Api.CreateStrikeoutAnnot([84, 60, 231, 70]);
let page = doc.GetPage(0);
page.AddObject(strikeoutAnnot);
console.log(`Annot class type is: ${strikeoutAnnot.GetClassType()}`);
```
