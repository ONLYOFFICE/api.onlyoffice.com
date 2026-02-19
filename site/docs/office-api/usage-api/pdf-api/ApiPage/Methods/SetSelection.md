# SetSelection

Gets page selection quads

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

This example selects the text on the page.

```javascript editor-pdf
let doc = Api.GetDocument();
let page = doc.GetPage(0);
page.SetSelection({x: 10, y: 10}, {x: 100, y: 100});
console.log('We selected the text on the page');
```
