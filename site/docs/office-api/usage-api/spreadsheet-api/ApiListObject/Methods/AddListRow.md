# AddListRow

Adds a new data row to the table at the specified 1-based position.
If no position is provided, the row is appended at the end.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.AddListRow(nPosition, bAlwaysInsert);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Optional | number |  | The 1-based position within the data body at which to insert the row. If omitted, the row is appended at the end. |
| bAlwaysInsert | Optional | boolean | true | Specifies whether cells outside the table are shifted when a row is added. |

## Returns

[ApiListRow](../../ApiListRow/ApiListRow.md) \| null

## Example

Append a new data row to a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I add another row of data to an existing table in a spreadsheet?

// Extend the table downward to accommodate incoming records while keeping all formatting intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newRow = table.AddListRow();

worksheet.GetRange("D1").SetValue("Row count after add:");
worksheet.GetRange("E1").SetValue(table.GetListRows().length);
```
