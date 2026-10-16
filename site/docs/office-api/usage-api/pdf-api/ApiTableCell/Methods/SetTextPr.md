# SetTextPr

Sets the text properties to the content of the current cell.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current cell. |

## Returns

boolean

## Example

Apply uniform text formatting to all content inside a table cell in a PDF.

```javascript editor-pdf
// Change the font style and size of all text in a table cell at once in a PDF.

// Style every character in a table cell by setting shared text properties in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
table.GetCell(0, 0).GetContent().AddText('Cell 1');
page.AddObject(table);

const textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
table.GetCell(0, 0).SetTextPr(textPr);
```
