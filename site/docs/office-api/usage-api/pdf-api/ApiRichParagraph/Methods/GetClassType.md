# GetClassType

Returns a type of the ApiRichParagraph class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"richParagraph"

## Example

Check the class type returned by a rich paragraph in a PDF document.

```javascript editor-pdf
// How do I check what type a rich paragraph object is in a PDF document?

// Retrieve and output the class type string for a rich paragraph in a PDF document.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);

console.log(`Object class type is: ${para.GetClassType()}`);
```
