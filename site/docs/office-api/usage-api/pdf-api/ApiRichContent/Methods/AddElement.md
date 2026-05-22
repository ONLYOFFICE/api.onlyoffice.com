# AddElement

Adds a rich paragraph using its position in rich content.

## Syntax

```javascript
expression.AddElement(pos, richPara);
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | The position where the rich paragraph will be added. |
| richPara | Required | [ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md) |  | The rich paragraph which will be added at the current position. |

## Returns

boolean

## Example

Insert a paragraph into formatted text content in a PDF.

```javascript editor-pdf
// How do I add text blocks to rich content in a PDF?

// Place new elements within text formatting containers in a PDF.

let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = Api.CreateRichParagraph();
para.AddText("Example text");
richContent.AddElement(0, para);

console.log(`We added new paragraph to content`);
```
