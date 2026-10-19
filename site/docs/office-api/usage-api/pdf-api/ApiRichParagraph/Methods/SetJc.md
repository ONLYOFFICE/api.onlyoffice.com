# SetJc

Sets the rich paragraph contents justification.

Inherited from [ApiRichParaPr.SetJc](../../ApiRichParaPr/Methods/SetJc.md).

## Syntax

```javascript
expression.SetJc(jc);
```

`expression` - A variable that represents an [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| jc | Required | [HorTextAlign](../../Enumeration/HorTextAlign.md) |  | The justification type that will be applied to the rich paragraph contents. |

## Returns

boolean

## Example

Change the text alignment of a paragraph in a PDF.

```javascript editor-pdf
// How do I align text differently in a PDF?

// Apply a specific alignment option to a paragraph in a PDF.

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
let paraPr = para.GetParaPr();
paraPr.SetJc("center");

console.log(`We set "${paraPr.GetJc()}" justification for paragraph properties`);
```
