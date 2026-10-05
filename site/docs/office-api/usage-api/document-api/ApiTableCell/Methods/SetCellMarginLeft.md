# SetCellMarginLeft

Specifies an amount of space which will be left between the left extent of the cell contents and  the border of a specific table cell within a table.

Inherited from [ApiTableCellPr.SetCellMarginLeft](../../ApiTableCellPr/Methods/SetCellMarginLeft.md).

## Syntax

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | The value for the amount of space to the left extent of the cell measured in twentieths of a point (1/1440 of an inch). If this value is `null`, then default table cell left margin will be used, otherwise the table cell left margin will be overridden with the specified value for the current cell. |

## Returns

boolean

## Example

Set the spacing between the cell content and its left edge in a document.

```javascript editor-docx
// How do I add padding to the left side of text inside a table cell in a document?

// Push the content away from the left border by controlling the inner gap in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellMarginLeft(720);
cell.GetContent().GetElement(0).AddText("This is just a sample text to show that the left cell margin is 36 points.");
table.SetStyle(tableStyle);
doc.Push(table);
```
