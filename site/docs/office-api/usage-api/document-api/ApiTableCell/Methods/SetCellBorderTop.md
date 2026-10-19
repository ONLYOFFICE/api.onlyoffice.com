# SetCellBorderTop

Sets the border which will be displayed at the top of the current table cell.

Inherited from [ApiTableCellPr.SetCellBorderTop](../../ApiTableCellPr/Methods/SetCellBorderTop.md).

## Syntax

```javascript
expression.SetCellBorderTop(type, size, space, color);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | [BorderType](../../Enumeration/BorderType.md) |  | The cell top border style. |
| size | Required | [pt_8](../../Enumeration/pt_8.md) |  | The width of the current cell top border measured in eighths of a point. |
| space | Required | [pt](../../Enumeration/pt.md) |  | The spacing offset in the top part of the table cell measured in points used to place this border. |
| color | Required | [ApiColor](../../ApiColor/ApiColor.md) |  | The border color. |

## Returns

boolean

## Example

Add a border along the top edge of a table cell in a document.

```javascript editor-docx
// How do I draw a line at the top of a table cell in a document?

// Give a cell a visible top border to separate it from the row above in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and add the top 4 point black border to cell #1:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let cell = table.GetRow(0).GetCell(0);
cell.SetCellBorderTop("single", 32, 0, Api.Color(51, 51, 51));
table.SetStyle(tableStyle);
doc.Push(table);
```
