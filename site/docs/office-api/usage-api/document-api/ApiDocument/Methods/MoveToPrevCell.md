# MoveToPrevCell

Moves the cursor to the previous table cell.

## Syntax

```javascript
expression.MoveToPrevCell(count);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of cells to move through. |

## Returns

boolean

## Example

Move the cursor to the previous cell of a table in a document.

```javascript editor-docx
// Navigate between adjacent table cells without selecting a cell directly.

// Add text at the cursor position after moving back to the previous cell in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(3, 3);
doc.InsertContent([table]);
let cell = table.Cells[0][2];
cell.GetContent().GetRange(0, 0).MoveCursorToPos(0);
doc.MoveToPrevCell();
doc.EnterText("Prev cell");
```
