# SetCellMarginBottom

Specifies an amount of space which shall be left between the bottom extent of the cell contents and the border
of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginBottom(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell bottom margin shall be used, |

## Returns

boolean

## Example

Set the bottom margin of a table cell in a PDF.

```javascript editor-pdf
// How do I add space below the content inside a cell in a PDF?

// Adjust the spacing at the bottom of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginBottom(600);

page.AddObject(table);
```
