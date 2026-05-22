# GetClassType

Returns a type of the ApiFreeTextAnnotation class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"freeTextAnnot"

## Example

Determine the class type of a text annotation in a PDF.

```javascript editor-pdf
// How do I identify what category a text note belongs to in a PDF?

// Get the classification of an annotation element in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot class type is: ${freeTextAnnot.GetClassType()}`);
```
