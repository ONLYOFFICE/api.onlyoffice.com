# SetCellMarginLeft

Specifies an amount of space which shall be left between the left extent of the current cell contents and the
left edge border of a specific individual table cell within a table.

## Syntax

```javascript
expression.SetCellMarginLeft(nValue);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Required | [twips](../../Enumeration/twips.md) |  | If this value is &lt;code&gt;null&lt;/code&gt;, then default table cell left margin shall be used, otherwise override the table cell left margin with specified value for the current cell. |

## Returns

This method doesn't return any data.

## Example

This example specifies an amount of space which shall be left between the left extent of the current cell contents and the left edge border of a specific individual table cell within a table.

```javascript editor-pptx
// How to set the cell left margin for the current table cell.

// Specify the left margin value for the ApiTableCell object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is just a sample text.");
content.Push(paragraph);
cell.SetCellMarginLeft(720);

slide.RemoveAllObjects();
slide.AddObject(table);

```
