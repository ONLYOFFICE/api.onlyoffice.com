# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Specifies if the rows will be added before or after the current row. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Insert additional rows into a table in a document.

```javascript editor-docx
// How do I expand a table by adding more rows above or below an existing row in a document?

// Grow a table by placing new blank rows next to a chosen row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
let row = table.GetRow(0);
row.GetCell(0).GetContent().GetElement(0).AddText("Second row");
table.SetWidth("percent", 100);
row.AddRows(1, true);
doc.Push(table);
```
