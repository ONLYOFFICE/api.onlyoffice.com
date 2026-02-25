# GetCallout

Gets annot callout.

## Syntax

```javascript
expression.GetCallout();
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[FreeTextCallout](../../Enumeration/FreeTextCallout.md)

## Example

This example gets callout of freeText annotation.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot callout is: ${freeTextAnnot.GetCallout()}`);
```
