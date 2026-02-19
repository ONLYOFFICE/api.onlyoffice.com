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

boolean

## Example

How to set a height of the row.

```javascript editor-pdf
// Create a table and change its rows height.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
row.SetHeight(30 * 36000);

page.AddObject(table);
```
