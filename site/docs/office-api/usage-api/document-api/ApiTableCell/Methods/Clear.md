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

Erase all content from a table cell in a document.

```javascript editor-docx
// How do I remove everything inside a table cell in a document?

// Empty a cell so it is ready to receive fresh content in a document.

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
