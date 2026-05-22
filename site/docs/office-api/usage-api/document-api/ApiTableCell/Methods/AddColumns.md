# AddColumns

Adds the new columns to the current table.

## Syntax

```javascript
expression.AddColumns(nCount, isBefore);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of columns to be added. |
| isBefore | Optional | boolean | false | Specifies if the new columns will be added before or after the current cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Insert additional columns next to an existing cell in a table in a document.

```javascript editor-docx
// How do I add more columns beside a specific cell in a table in a document?

// Expand a table horizontally by appending columns after a chosen cell in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Two new columns were added after this cell.");
table.GetCell(0, 0).AddColumns(2, false);
```
