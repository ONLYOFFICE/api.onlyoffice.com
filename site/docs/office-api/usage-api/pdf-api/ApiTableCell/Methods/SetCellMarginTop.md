# SetCellMarginTop

Specifies an amount of space which shall be left between the top extent of the current cell contents and the
top edge border of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginTop(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell top margin shall be used,
otherwise override the table cell top margin with specified value for the current cell. |

## Returns

boolean

## Example

Set the top margin of a table cell in a PDF.

```javascript editor-pdf
// How do I add space above the content inside a cell in a PDF?

// Adjust the spacing at the top of your table cell in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginTop(720);

page.AddObject(table);
```
