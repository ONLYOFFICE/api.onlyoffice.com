# GetRectDiff

Gets annotation rect difference.

## Syntax

```javascript
expression.GetRectDiff();
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[Rect](../../Enumeration/Rect.md)

## Example

Get rect diff of freeText annotation in a PDF document.

```javascript editor-pdf
// How do I get the rect diff in a PDF document?

// Get the rect diff using a free text annotation object in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot rect diff is: ${freeTextAnnot.GetRectDiff()}`);
```
