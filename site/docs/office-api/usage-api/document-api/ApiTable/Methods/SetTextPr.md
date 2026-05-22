# SetTextPr

Applies the text settings to the entire contents of the table.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current table. |

## Returns

boolean

## Example

Apply a shared text style to every cell across an entire table in a document.

```javascript editor-docx
// How do I make all the text in a table bold and larger at once in a document?

// Uniform the font formatting throughout a table without editing each cell separately in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("Cell 1");
table.GetCell(0, 1).GetContent().GetElement(0).AddText("Cell 2");
table.GetCell(0, 2).GetContent().GetElement(0).AddText("Cell 3");
doc.Push(table);
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
table.SetTextPr(textPr);
```
