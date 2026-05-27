# SetParaPr

Sets the paragraph properties.

## Syntax

```javascript
expression.SetParaPr(paraPr);
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | Required | [ApiRichParaPr](../../ApiRichParaPr/ApiRichParaPr.md) |  | The paragraph properties to apply. |

## Returns

boolean

## Example

Apply formatting settings to a paragraph in a PDF.

```javascript editor-pdf
// How do I configure paragraph appearance in a PDF?

// Assign custom formatting rules to a paragraph in a PDF.

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

let paraPr = Api.CreateRichParaPr();
paraPr.SetJc("right");
para.SetParaPr(paraPr);

console.log(`We set new rich paragraph properties to rich paragraph`);
```
