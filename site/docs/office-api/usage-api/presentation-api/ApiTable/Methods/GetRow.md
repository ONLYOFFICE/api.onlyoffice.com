# GetRow

Returns a row by its index.

## Syntax

```javascript
expression.GetRow(nIndex);
```

`expression` - A variable that represents a [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nIndex | Required | number |  | The row index (position) in the table. |

## Returns

[ApiTableRow](../../ApiTableRow/ApiTableRow.md)

## Example

Access a specific row from a table in a presentation.

```javascript editor-pptx
// How do I get a row from a table using its position in a presentation?

// Retrieve a table row by index and add text to it in a presentation.

const presentation = Api.GetPresentation();

const table = Api.CreateTable(2, 4);
table.AddRow(1, true);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text in the first row.");
content.Push(paragraph);

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
slide.AddObject(table);
```
