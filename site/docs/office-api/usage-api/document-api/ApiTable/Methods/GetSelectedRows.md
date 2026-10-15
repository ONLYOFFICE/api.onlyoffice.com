# GetSelectedRows

Returns all rows that contain the currently selected cells. This method identifies which rows contain selected cells and returns those complete row objects.

## Syntax

```javascript
expression.GetSelectedRows();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)[]

## Example

Retrieve all rows that contain currently selected cells in a document.

```javascript editor-docx
// GetSelectedRows returns an array of ApiTableRow objects for rows with an active selection.

// Create a table, select cells across two rows, then get those rows in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
doc.MoveCursorDown(1);
doc.MoveCursorDown(1, true);
let selectedRows = table.GetSelectedRows();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Selected rows: " + selectedRows.length);
doc.Push(paragraph);
```
