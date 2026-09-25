# GetRow

Returns a table row by its position in the table.

## Syntax

```javascript
expression.GetRow(rowIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowIndex | Required | number |  | The row index within the table. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

Retrieve a specific row from a table by its position in a document.

```javascript editor-docx
// Get a row by its zero-based index to work with its cells in a document.

// Use an existing row as a reference point to insert a new row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns, get the second row and insert a new row before it, so that the table has 3 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
```
