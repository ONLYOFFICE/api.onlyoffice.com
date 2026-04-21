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
| startPoint | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |
| endPoint | Required | [Point](../../Enumeration/Point.md) |  | No description provided. |

## Returns

boolean

## Example

Select the text on the page.

```javascript editor-pdf
// How can I set selection using a page in a PDF document?

// Set selection for a page in a PDF document.

let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');
```
