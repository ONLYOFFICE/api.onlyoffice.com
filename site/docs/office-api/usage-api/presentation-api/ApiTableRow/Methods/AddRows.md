# AddRows

Adds the new rows to the current table.

## Syntax

```javascript
expression.AddRows(nCount, isBefore);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | Required | Number |  | Count of rows to be added. |
| isBefore | Optional | boolean | false | Specifies if the rows will be added before or after the current row. |

## Returns

[ApiTable](../../ApiTable/ApiTable.md) \| null

## Example

Add new rows to the table from a row in a presentation.

```javascript editor-pptx
// Useful for adding rows after a specific row.

// Insert two new rows after the first row.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const para = Api.CreateParagraph();
para.AddText("First row")
row.GetCell(0).GetContent().Push(para);
row.AddRows(2, false);
slide.RemoveAllObjects();
slide.AddObject(table);
```
