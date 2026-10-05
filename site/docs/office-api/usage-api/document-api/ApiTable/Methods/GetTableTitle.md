# GetTableTitle

Returns the table title (caption).

Inherited from [ApiTablePr.GetTableTitle](../../ApiTablePr/Methods/GetTableTitle.md).

## Syntax

```javascript
expression.GetTableTitle();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the title assigned to a table in a document.

```javascript editor-docx
// How do I retrieve the title that has been set on a table in a document?

// Display the stored title of a table as paragraph text in a document.

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
