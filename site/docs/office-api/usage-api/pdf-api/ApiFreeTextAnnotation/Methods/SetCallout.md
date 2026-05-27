# SetCallout

Sets annot callout.

## Syntax

```javascript
expression.SetCallout(callout);
```

`expression` - A variable that represents a [ApiFreeTextAnnotation](../ApiFreeTextAnnotation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| callout | Required | [FreeTextCallout](../../Enumeration/FreeTextCallout.md) |  | An array of 3 points defining the callout line. |

## Returns

boolean

## Example

Set the callout shape style for a text annotation in a PDF.

```javascript editor-pdf
// How do I change what the comment box looks like in a PDF?

// Assign a callout appearance to an annotation element in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);
console.log(`Annot callout is: ${freeTextAnnot.GetCallout()}`);
```
