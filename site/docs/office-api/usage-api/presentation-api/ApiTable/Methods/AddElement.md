# AddElement

Adds a paragraph using its position in the cell.

## Syntax

```javascript
expression.AddElement(oCell, nPos, oElement);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCell | Required | [ApiTableCell](../../ApiTableCell/ApiTableCell.md) |  | The cell where the specified element will be added. |
| nPos | Required | number |  | The position in the cell where the specified element will be added. |
| oElement | Required | [DocumentElement](../../Enumeration/DocumentElement.md) |  | The document element which will be added at the current position. |

## Returns

boolean

## Example

Add a paragraph at a specific position inside a table cell on a slide.

```javascript editor-pptx
// Insert a document element into the chosen cell by its position.

// Create a table and add a paragraph as the first element of its first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 2);
slide.RemoveAllObjects();
slide.AddObject(table);
const cell = table.GetCell(0, 0);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Inserted paragraph");
table.AddElement(cell, 0, paragraph);
```
