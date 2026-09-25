# RemoveRow

Removes a table row with a specified cell.

## Syntax

```javascript
expression.RemoveRow(oCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell which is placed in the row that will be removed. |

## Returns

boolean

## Example

Delete a row from a table in a document.

```javascript editor-docx
// Remove the row that contains a specified cell from a table in a document.

// Shorten a table by eliminating an unwanted row in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 3 rows and 3 columns and remove the second row, so that the table has 2 rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(1).GetCell(0);
table.RemoveRow(cell);
doc.Push(table);
```
