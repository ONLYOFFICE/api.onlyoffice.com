# AddColumn

Adds a new column to the current table.

## Syntax

```javascript
expression.AddColumn(oCell, isBefore);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Optional | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell after which a new column will be added. If not specified, a new column will be added at the end of the table. |
| isBefore | Optional | boolean | false | Adds a new column before (false) or after (true) the specified cell. If no cell is specified, then this parameter will be ignored. |

## Returns

boolean

## Example

Insert an extra column into an existing table to expand its structure in a document.

```javascript editor-docx
// Widen a table by adding a column next to an existing one in a document.

// Grow a table horizontally by placing a new column at a chosen position in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 2 rows and 2 columns and insert a new column before the second one, so that the table has 3 columns:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.AddColumn(table.GetRow(0).GetCell(1), true);
doc.Push(table);
```
