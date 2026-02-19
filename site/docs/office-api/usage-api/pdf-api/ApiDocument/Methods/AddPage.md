# AddPage

Adds a new page to document.

## Syntax

```javascript
expression.AddPage(nPos, nWidth, nHeight);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPos | Required | number |  | pos to add page. |
| nWidth | Optional | [pt](../../Enumeration/pt.md) |  | page width. |
| nHeight | Optional | [pt](../../Enumeration/pt.md) |  | page height. |

## Returns

[ApiPage](../../ApiPage/ApiPage.md)

## Example

This example adds new page into document after 0 index page.

```javascript editor-pdf
let doc = Api.GetDocument();
doc.AddPage(1);
```
