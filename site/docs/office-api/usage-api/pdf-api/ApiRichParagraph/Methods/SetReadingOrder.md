# SetReadingOrder

Specifies the reading order for the current paragraph.\
Possible values are:\
-**null** - use the standart direction parameter;\
-**"ltr"** - left-to-right text direction;\
-**"rtl"** - right-to-left text direction.

## Syntax

```javascript
expression.SetReadingOrder(readingOrder);
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| readingOrder | Optional | [ReadingOrder](../../Enumeration/ReadingOrder.md) |  | The reading order. |

## Returns

[ApiRichParagraph](../../ApiRichParagraph/ApiRichParagraph.md)

## Example

This example sets rtl to rich paragraph.

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
let run = para.GetElement(0);
run.AddText("Some paragraph text");
para.SetReadingOrder("rtl");

console.log("We sets rtl to rich paragraph");
```
