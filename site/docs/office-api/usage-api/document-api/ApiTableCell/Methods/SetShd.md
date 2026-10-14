# SetShd

Specifies the shading applied to the contents of the table cell.

Inherited from [ApiTableCellPr.SetShd](../../ApiTableCellPr/Methods/SetShd.md).

## Syntax

```javascript
expression.SetShd(shd);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| shd | Required | [ApiShd](../../ApiShd/ApiShd.md) |  | The shading created with the Api.CreateShd method. |

## Returns

boolean

## Example

Add a colored shading to a table cell in a document.

```javascript editor-docx
// How do I apply a background shading to a specific table cell in a document?

// Highlight a table cell with a solid fill to make it stand out in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add an orange shading to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetShd(Api.CreateShd("clear", Api.HexColor('#FF6F3D')));
table.SetStyle(tableStyle);
doc.Push(table);
```
