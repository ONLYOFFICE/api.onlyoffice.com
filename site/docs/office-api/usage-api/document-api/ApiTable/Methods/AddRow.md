# AddRow

Adds a new row to the current table.

## Syntax

```javascript
expression.AddRow(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which a new row will be added. If not specified, a new row will be added at the end of the table. |
| isBefore | Optional | boolean | false | Adds a new row before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

Insert a new row into a table in a document.

```javascript editor-docx
// Make room for more data by adding an extra row to a table in a document.

// Extend a table by inserting a row before a chosen row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new row before the second one, so that the table has 3 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddRow(table.GetRow(1).GetCell(0), true);
doc.Push(table);
```
