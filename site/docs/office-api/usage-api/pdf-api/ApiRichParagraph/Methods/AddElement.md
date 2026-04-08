# AddElement

Adds an element to the current paragraph.

## Syntax

```javascript
expression.AddElement(richRun, pos);
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| richRun | Required | [ApiRichRun](../../ApiRichRun/ApiRichRun.md) |  | The element which will be added at the current position. |
| pos | Optional | number |  | The position where the current element will be added. If this value is not specified, then the element will be added at the end of the current paragraph. |

## Returns

boolean

## Example

This example adds new element to rich paragraph.

```javascript editor-pdf
let doc = Api.GetDocument();
let freeTextAnnot = Api.CreateFreeTextAnnot([160, 50, 360, 135]);
let page = doc.GetPage(0);
page.AddObject(freeTextAnnot);
freeTextAnnot.SetIntent("freeTextCallout");
freeTextAnnot.SetCallout([{x: 161, y: 51}, {x: 249, y: 125}, {x: 261, y: 125}]);
freeTextAnnot.SetRectDiff([100, 64, 0.5, 0.5]);

let richContent = freeTextAnnot.GetContent();
let para = richContent.GetElement(0);
let newRun = Api.CreateRichRun();
newRun.AddText("New run element");
para.AddElement(newRun, 0);

console.log("We added new rich run element to rich paragraph");
```
