# SetTableLayout

Specifies the algorithm which will be used to lay out the contents of the current table within the document.

## Syntax

```javascript
expression.SetTableLayout(sType);
```

`expression` - A variable that represents a [ApiTablePr](../ApiTablePr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "autofit" \| "fixed" |  | The type of the table layout in the document. |

## Returns

boolean

## Example

Choose whether a table resizes its columns automatically or keeps them at a fixed width in a document.

```javascript editor-docx
// How do I prevent table columns from changing size when content is added in a document?

// Lock column widths so the table structure stays consistent regardless of content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("fixed");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
doc.Push(table);
```
