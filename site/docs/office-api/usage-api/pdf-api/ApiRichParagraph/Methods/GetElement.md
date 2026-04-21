# GetElement

Returns a paragraph element using the position specified.

## Syntax

```javascript
expression.GetElement(pos);
```

`expression` - A variable that represents a [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | The position where the element which content we want to get must be located. |

## Returns

[ApiRichRun](../../ApiRichRun/ApiRichRun.md)

## Example

Get element from rich paragraph in a PDF document.

```javascript editor-pdf
// How to get the element for a rich paragraph in a PDF document?

// Get the element and display the result in a PDF document.

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
run.AddText("Some example text");

console.log("We gets rich run element from rich paragraph and added some text to it");
```
