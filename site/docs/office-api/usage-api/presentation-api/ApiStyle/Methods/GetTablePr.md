# GetTablePr

Returns the table properties of the current style.

## Syntax

```javascript
expression.GetTablePr();
```

`expression` - A variable that represents an [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiTablePr](../../ApiTablePr/ApiTablePr.md) \| null \| undefined

## Example

Read the table properties of a presentation table style.

```javascript editor-pptx
// The returned properties keep the whole table borders and the table background.

// Copy the borders of one table style into another one.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const sourceStyle = presentation.GetStyle("Medium Style 2 - Accent 1");
const targetStyle = presentation.GetStyle("No Style, Table Grid");
table.SetStyle(targetStyle);
targetStyle.SetTablePr(sourceStyle.GetTablePr());
slide.RemoveAllObjects();
slide.AddObject(table);
```
