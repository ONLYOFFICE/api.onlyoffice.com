# SetTableTitle

Sets the table title (caption).

Inherited from [ApiTablePr.SetTableTitle](../../ApiTablePr/Methods/SetTableTitle.md).

## Syntax

```javascript
expression.SetTableTitle(sTitle);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The table title to be set. |

## Returns

boolean

## Example

Assign a short title to a table in a document.

```javascript editor-docx
// How do I give a table a named title in a document?

// Label a table so it can be identified by name in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableTitle("Table 1");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table title: " + table.GetTableTitle());
doc.Push(table);
```
