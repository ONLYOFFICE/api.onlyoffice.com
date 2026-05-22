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

Insert a new page into a document in a PDF.

```javascript editor-pdf
// Can I add pages to a PDF document?

// Place additional pages at specific positions in a PDF.

let doc = Api.GetDocument();
doc.AddPage(1);
```
