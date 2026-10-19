# SetTableLayout

Specifies the algorithm which will be used to lay out the contents of the current table within the document.

Inherited from [ApiTablePr.SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md).

## Syntax

```javascript
expression.SetTableLayout(sType);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "autofit" \| "fixed" |  | The type of the table layout in the document. |

## Returns

boolean

## Example

Choose whether a table sizes its columns automatically or keeps them fixed in a document.

```javascript editor-docx
// How do I lock a table's column widths so they do not change in a document?

// Prevent a table from resizing its columns when content changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetTableLayout("fixed");
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
table.SetStyle(tableStyle);
doc.Push(table);
```
