# SetSelection

Sets page selection.

## Syntax

```javascript
expression.SetSelection(startPoint, endPoint);
```

`expression` - A variable that represents a [ApiPage](../ApiPage.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| startPoint | Required | [Point](../../Enumeration/Point.md) |  | The start point of the selection. |
| endPoint | Required | [Point](../../Enumeration/Point.md) |  | The end point of the selection. |

## Returns

boolean

## Example

Mark a specific area of text as selected on a page in a PDF.

```javascript editor-pdf
// How do I highlight a range of text on a page in a PDF?

// Define and activate a text selection within given coordinates in a PDF.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');
```
