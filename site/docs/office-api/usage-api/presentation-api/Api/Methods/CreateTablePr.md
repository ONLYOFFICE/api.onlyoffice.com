# CreateTablePr

Creates the empty table properties.

## Syntax

```javascript
expression.CreateTablePr();
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTablePr](../../ApiTablePr/ApiTablePr.md)

## Example

Create a reusable table properties object in a presentation.

```javascript editor-pptx
// The new object holds empty table properties that can be filled and applied to a table style.

// Build table properties with a dark gray grid and apply them to the style of a table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Medium Style 2 - Accent 1");
table.SetStyle(style);
const tablePr = Api.CreateTablePr();
tablePr.SetTableBorderAll("single", 0.5, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
style.SetTablePr(tablePr);
slide.RemoveAllObjects();
slide.AddObject(table);
```
