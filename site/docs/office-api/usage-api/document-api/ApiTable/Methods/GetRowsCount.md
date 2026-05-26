# GetRowsCount

Returns a number of rows in the current table.

## Syntax

```javascript
expression.GetRowsCount();
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Count the total number of rows in a table in a document.

```javascript editor-docx
// How do I find out how many rows a table contains in a document?

// Display the row count before and after adding a row to a table in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 2x2 table and add a new row, so that it becomes 2x3:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let tableRowsNumber = table.GetRowsCount();
table.AddRow(table.GetRow(1).GetCell(0), true);
let tableRowsNumber1 = table.GetRowsCount();
doc.Push(table);
paragraph = Api.CreateParagraph();
paragraph.AddText("The table above had " + tableRowsNumber + " rows before we added a new one. ");
paragraph.AddText("Now this table has " + tableRowsNumber1 + " rows.");
doc.Push(paragraph);
```
