# SetTextPr

Sets the text properties to the current row.

## Syntax

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | Required | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | The text properties that will be set to the current row. |

## Returns

boolean

## Example

Apply text formatting to every cell of a table row in a presentation.

```javascript editor-pptx
// The given ApiTextPr is pushed to all cells of the row at once, so a header row can be styled in one call.

// Fill the first row with captions and make its text bold in a single call.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
for (let i = 0; i < row.GetCellsCount(); i++) {
	row.GetCell(i).SetText("Header " + (i + 1));
}
const textPr = Api.CreateTextPr();
textPr.SetBold(true);
row.SetTextPr(textPr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
