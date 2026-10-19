# GetTableTitle

Returns the table title.

## Syntax

```javascript
expression.GetTableTitle();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the title of the table in a presentation.

```javascript editor-pptx
// Needed when retrieving a table title.

// Create a table, set its title, and display the title in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableTitle("Quarterly Report");
const title = table.GetTableTitle();
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table title: " + title);
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
//TODO
```
