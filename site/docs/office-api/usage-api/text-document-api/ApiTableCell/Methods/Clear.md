# Clear

Clears the content from the current cell.

## Syntax

```javascript
expression.Clear();
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example clears the content from the cell.

```javascript editor-docx
// Remove the content of the table cell.

// Get the table cell and clear its value.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
doc.Push(table);
table.GetCell(0, 0).Clear();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content of the table cell was cleared.");
doc.Push(paragraph);
```
