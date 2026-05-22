# SetBackgroundColor

Sets the background color to the current table cell.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

Apply a background color to a table cell in a document.

```javascript editor-docx
// How do I fill a table cell with a specific color in a document?

// Give a cell a colored background to highlight it visually in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.SetBackgroundColor(Api.HexColor('#FF6F3D'));
doc.Push(table);
```
