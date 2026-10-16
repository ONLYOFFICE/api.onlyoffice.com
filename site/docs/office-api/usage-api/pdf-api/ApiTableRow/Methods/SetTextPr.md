# SetTextPr

Sets the text properties to the current row.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current row. |

## Returns

boolean

## Example

Apply text formatting to all cells in a table row in a PDF.

```javascript editor-pdf
// Change the text style for an entire row of a table in a PDF.

// Style the text across a full table row uniformly in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const row = table.GetRow(0);
row.GetCell(0).GetContent().AddText('First row');
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);

page.AddObject(table);
```
