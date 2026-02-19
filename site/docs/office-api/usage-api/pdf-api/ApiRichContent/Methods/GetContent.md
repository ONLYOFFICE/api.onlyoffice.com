# GetContent

Returns an array of rich paragraphs from the current rich content object.

## Syntax

```javascript
expression.GetContent(getCopies);
```

`expression` - A variable that represents a [ApiRichContent](../ApiRichContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| getCopies | Required | boolean |  | Specifies if the copies of the document elements will be returned or not. |

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)[]

## Example

This example gets all elements from rich content.

```javascript editor-pdf
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

let allParas = richContent.GetContent();

console.log(`Rich content has ${allParas.length} paragraphs`);
```
