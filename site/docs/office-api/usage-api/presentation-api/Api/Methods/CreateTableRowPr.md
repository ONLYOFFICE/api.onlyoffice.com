# CreateTableRowPr

Creates the empty table row properties.

## Syntax

```javascript
expression.CreateTableRowPr();
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md)

## Example

Create a reusable table row properties object in a presentation.

```javascript editor-pptx
// The new object holds empty row properties that can be filled once and applied to several rows.

// Build row properties with a minimum height and apply the same object to every row of a table on a slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 1000);
for (let i = 0; i < 3; i++) {
	table.GetRow(i).SetRowPr(rowPr);
}
slide.RemoveAllObjects();
slide.AddObject(table);
```
