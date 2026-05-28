# GetIndex

Returns the 1-based index of the column within the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetIndex();
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Find the position number of a column within a formatted table in a spreadsheet.

```javascript editor-xlsx
// How do I get the index of a specific table column in a spreadsheet?

// Determine where a column sits inside a table by reading its one-based position number.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[1];

worksheet.GetRange("D1").SetValue("Column index:");
worksheet.GetRange("E1").SetValue(column.GetIndex());
```
