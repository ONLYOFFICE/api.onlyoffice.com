# SetTableDescription

Sets the table description.

## Syntax

```javascript
expression.SetTableDescription(descr);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| descr | Required | string |  | The table description. |

## Returns

boolean

## Example

Set the description of the table in a presentation.

```javascript editor-pptx
// Useful for setting and retrieving a table description.

// Create a table, set its description, and display it in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
table.SetTableDescription("Sales data for Q1 2025");
const paragraph = Api.CreateParagraph();
paragraph.AddText("Table description: " + table.GetTableDescription());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
