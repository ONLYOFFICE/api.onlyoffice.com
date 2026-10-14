# SetRowPr

Sets the properties to the current table row.

## Syntax

```javascript
expression.SetRowPr(oApiTableRowPr);
```

`expression` - A variable that represents an [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableRowPr | Required | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | The table row properties. |

## Returns

boolean

## Example

Set the properties for a table row in a presentation.

```javascript editor-pptx
// Useful for applying row properties to a table row.

// Set the height of the first row using row properties.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(2, 3);
const row = table.GetRow(0);
const rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720*3);
row.SetRowPr(rowPr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
