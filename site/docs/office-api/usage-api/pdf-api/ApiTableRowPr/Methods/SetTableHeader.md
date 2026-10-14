# SetTableHeader

Specifies that the current table row will be repeated at the top of each new page wherever this table is displayed.

## Syntax

```javascript
expression.SetTableHeader(isHeader);
```

`expression` - A variable that represents an [ApiTableRowPr](../ApiTableRowPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isHeader | Required | boolean |  | The true value means that the current table row will be repeated at the top of each new page. |

## Returns

boolean

## Example

Mark the first row as a repeated table header in a PDF.

```javascript editor-pdf
// Make a table row repeat as a header row in a PDF.

// Mark the first row as a header that repeats on each page in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 5);
const headerRow = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText('Header row');
headerRow.SetTableHeader(false);
headerRow.GetCell(0).GetContent().Push(para);

page.AddObject(table);
```
