# AddListColumn

Adds a new column to the table at the specified 1-based position.
If no position is provided, the column is appended at the end.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.AddListColumn(nPosition);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | Optional | number |  | The 1-based position at which to insert the new column. |

## Returns

[ApiListColumn](../../ApiListColumn/ApiListColumn.md) \| null

## Example

Expand a formatted table by adding a new column in a spreadsheet.

```javascript editor-xlsx
// How do I add an extra column to an existing table in a spreadsheet?

// Grow your table structure to capture additional data fields without rebuilding it from scratch in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newColumn = table.AddListColumn();

worksheet.GetRange("D1").SetValue("New column name:");
worksheet.GetRange("E1").SetValue(newColumn ? newColumn.GetName() : "none");
worksheet.GetRange("D2").SetValue("Column count:");
worksheet.GetRange("E2").SetValue(table.GetListColumns().length);
```
