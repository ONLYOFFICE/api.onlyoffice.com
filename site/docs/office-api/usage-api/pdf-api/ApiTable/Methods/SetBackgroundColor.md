# SetBackgroundColor

Sets the background color for all cells in the current table.

## Syntax

```javascript
expression.SetBackgroundColor(color);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| color | Optional | [ApiColor](../../ApiColor/ApiColor.md) |  | If not passed, the background color will be cleared. |

## Returns

boolean

## Example

Set the background color for all cells in a table in a PDF.

```javascript editor-pdf
// Apply one background color to an entire table in a PDF.

// Create a table and apply an orange background color to all cells in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(3, 3);
const color = Api.RGB(255, 111, 61);
table.SetBackgroundColor(color);

page.AddObject(table);
```
