# GetDataBodyRange

Returns the range of the data body of the column, excluding the header and totals rows.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetDataBodyRange();
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Retrieve the data cells of a table column, excluding the header and totals rows in a spreadsheet.

```javascript editor-xlsx
// How do I access only the data portion of a table column without the header in a spreadsheet?

// Isolate the value-bearing rows of a column to read or process them independently from the header.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
let dataRange = column.GetDataBodyRange();

worksheet.GetRange("D1").SetValue("Data body range:");
worksheet.GetRange("E1").SetValue(dataRange.GetAddress());
```
