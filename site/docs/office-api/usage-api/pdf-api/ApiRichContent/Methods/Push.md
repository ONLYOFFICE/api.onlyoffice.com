# Push

Pushes a rich paragraph to a rich content.

## Syntax

```javascript
expression.Push(richPara);
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richPara | Required | [ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md) |  | The rich paragraph which will be pushed to the rich content. |

## Returns

boolean

## Example

Pushes a new element to rich content in a PDF document.

```javascript editor-pdf
// How can I push using a rich content in a PDF document?

// Push for a rich content in a PDF document.

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
richContent.Push(para);

console.log(`We pushed new paragraph to content`);
```
