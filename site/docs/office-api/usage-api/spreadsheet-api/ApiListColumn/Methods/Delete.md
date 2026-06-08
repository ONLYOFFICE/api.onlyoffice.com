# Delete

Deletes the column from the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Remove a column from a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I delete a specific column from a table in a spreadsheet?

// Shrink a table by permanently dropping one of its columns along with all its data.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("C1").SetValue("Stock");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("C2").SetValue(50);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
worksheet.GetRange("C3").SetValue(30);
let table = worksheet.AddListObject("xlSrcRange", "A1:C3");

let column = table.GetListColumns()[2];
column.Delete();

worksheet.GetRange("E1").SetValue("Column count after delete:");
worksheet.GetRange("F1").SetValue(table.GetListColumns().length);
```
