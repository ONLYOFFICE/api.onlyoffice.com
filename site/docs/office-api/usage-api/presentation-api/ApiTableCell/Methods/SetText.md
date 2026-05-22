# SetText

Replaces all content of the current table cell with the specified text,
preserving the formatting of the first paragraph.

## Syntax

```javascript
expression.SetText(text);
```

`expression` - A variable that represents a [ApiTableCell](../ApiTableCell.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | The text to set. |

## Returns

[ApiRun](../../ApiRun/ApiRun.md)

## Example

Replace all content in a table cell with plain text in a presentation.

```javascript editor-pptx
// How do I overwrite the text of a table cell in a presentation?

// Clear an existing cell and write a new sentence into it, preserving formatting in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const table = Api.CreateTable(2, 2);
const cell = table.GetRow(0).GetCell(0);
cell.AddText("Original cell content.");
cell.SetText("Updated cell content.");

slide.AddObject(table);
```
