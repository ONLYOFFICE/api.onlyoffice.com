# SetHeight

Sets the height to the current table row.

## Syntax

```javascript
expression.SetHeight(nValue);
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nValue | Optional | [EMU](../../Enumeration/EMU.md) |  | The row height in English measure units. |

## Returns

This method doesn't return any data.

## Example

This example sets the height to the table row.

```javascript editor-pptx
// How to set a height of the row.

// Create a table and change its rows height.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

slide.RemoveAllObjects();
slide.AddObject(table);

```
