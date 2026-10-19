# RemoveElement

Removes an element using the position specified.

:::note
If the element you remove is the last paragraph element (i.e. all the elements are removed from the paragraph), a new empty run is automatically created.
:::

## Syntax

```javascript
expression.RemoveElement(pos);
```

`expression` - A variable that represents an [ApiRichParagraph](../ApiRichParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pos | Required | number |  | The element position which we want to remove from the paragraph. |

## Returns

boolean

## Example

Delete an element from a paragraph in a free text annotation in a PDF.

```javascript editor-pdf
// How do I remove a single element from a paragraph in a PDF?

// Eliminate an item at a certain position from a paragraph in a PDF.

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
para.RemoveElement(0);

console.log("We removed first element from rich paragraph");
```
