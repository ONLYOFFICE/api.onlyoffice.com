# SetShd

Specifies the shading applied to the contents of the table cell.

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTableCellPr](../ApiTableCellPr.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

boolean

## Example

Apply a background shading to all table cells using the table cell properties of a style in a document.

```javascript editor-docx
// How do I fill a table cell with a specific background color in a document?

// Highlight a table cell by giving it a colored background in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add add an orange shading to all cells:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableCellPr = tableStyle.GetTableCellPr();
tableCellPr.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
table.SetStyle(tableStyle);
doc.Push(table);
```
