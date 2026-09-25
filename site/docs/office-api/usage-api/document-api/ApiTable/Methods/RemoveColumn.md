# RemoveColumn

Removes a table column with a specified cell.

## Syntax

```javascript
expression.RemoveColumn(oCell);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell which is placed in the column that will be removed. |

## Returns

boolean

## Example

Delete a column from a table in a document.

```javascript editor-docx
// Remove the column that contains a specified cell from a table in a document.

// Narrow a table by eliminating an unwanted column in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a table with 3 rows and 3 columns and remove the second column, so that the table has 2 columns:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(2).GetCell(1);
table.RemoveColumn(cell);
doc.Push(table);
```
