# GetClassType

Returns a type of the ApiHighlightAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiHighlightAnnotation](../ApiHighlightAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"highlightAnnot"

## Example

Determine the type of a highlight annotation in a PDF.

```javascript editor-pdf
// What class type does a highlight annotation have in a PDF?

// Check the object classification for a highlight annotation in a PDF.

let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);
```
