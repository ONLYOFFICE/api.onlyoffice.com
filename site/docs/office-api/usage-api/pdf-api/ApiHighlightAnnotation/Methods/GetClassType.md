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

This example gets class type of highlight annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let highlightAnnot = Api.CreateHighlightAnnot([84, 55, 231, 72]);
let page = doc.GetPage(0);
page.AddObject(highlightAnnot);
console.log(`Annot class type is: ${highlightAnnot.GetClassType()}`);
```
