# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - A variable that represents an [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Specifies if the new rows will be added before or after the current cell. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Add new rows to the table via a cell in a presentation.

```javascript editor-pptx
// Useful for inserting rows after a specific cell.

// Add two rows after the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const cell = table.GetRow(0).GetCell(0);
cell.GetContent().Push(Api.CreateParagraph().AddText("Two new rows added after this cell."));
cell.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);
```
