# GetTableDescription

Returns the table description.

Inherited from [ApiTablePr.GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md).

## Example

Read the descriptive text assigned to a table in a document.

```javascript editor-docx
// How do I retrieve the written description stored with a table in a document?

// Display the accessibility description associated with a table in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + tablePr.GetTableDescription());
doc.Push(table);
```
