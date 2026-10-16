# SetHeight

Sets the total height of the current table, distributing it evenly among the table rows. The value is applied as a minimum height for each row, so a row can be taller if its content requires more space.

## Syntax

```javascript
expression.SetHeight(height);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The table height in English measure units. |

## Returns

boolean

## Example

Set the total height of a table on a slide.

```javascript editor-pptx
// Distribute the requested height proportionally among the table rows.

// Create a table on a slide and set its overall height to 80 millimeters.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
table.SetHeight(Api.MillimetersToEmus(80));
```
