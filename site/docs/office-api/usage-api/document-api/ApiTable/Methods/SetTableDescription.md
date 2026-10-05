# SetTableDescription

Sets the table description.

Inherited from [ApiTablePr.SetTableDescription](../../ApiTablePr/Methods/SetTableDescription.md).

## Syntax

```javascript
expression.SetTableDescription(sDescr);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescr | Required | string |  | The table description to be set. |

## Returns

boolean

## Example

Attach a plain-text description to a table in a document.

```javascript editor-docx
// How do I store a written summary alongside a table in a document?

// Provide accessible alternative text for a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + table.GetTableDescription());
doc.Push(table);
```
