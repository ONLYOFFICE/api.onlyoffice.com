# GetElementsCount

Returns a number of elements in the current paragraph.

## Syntax

```javascript
expression.GetElementsCount();
```

`expression` - A variable that represents an [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the elements in a paragraph in a PDF.

```javascript editor-pdf
// How do I find out how many items are in a paragraph in a PDF?

// Determine the total number of elements within a paragraph in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
para.AddText("Example text");

console.log(`Rich paragraph contains ${para.GetElementsCount()} elements`);
```
