# GetClassType

Returns a type of the ApiRichContent class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"richContent"

## Example

Find out what type of formatted text object you are working with in a PDF.

```javascript editor-pdf
// How do I check the category of a rich content container in a PDF?

// Determine the classification of formatted text content in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
console.log(`Object class type is: ${richContent.GetClassType()}`);
```
