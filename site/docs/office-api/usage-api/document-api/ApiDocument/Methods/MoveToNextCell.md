# MoveToNextCell

Moves the cursor to the next table cell.

## Syntax

```javascript
expression.MoveToNextCell(count);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| count | Optional | number | 1 | Number of cells to move through. |

## Returns

boolean

## Example

Move the cursor to the next cell of a table in a document.

```javascript editor-docx
// Navigate between adjacent table cells without selecting a cell directly.

// Add text at the cursor position after moving to the next cell in a document.

let doc = Api.GetDocument();
let table = Api.CreateTable(2, 2);
doc.InsertContent([table]);
let cell = table.Cells[0][0];
cell.GetContent().GetRange(0, 0).MoveCursorToPos(0);
doc.MoveToNextCell();
doc.EnterText("Next cell");
```
