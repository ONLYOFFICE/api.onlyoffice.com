# GetListColumns

Returns an array of all columns in the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetListColumns();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiListColumn](../../ApiListColumn/ApiListColumn.md)[]

## Example

Retrieve all columns belonging to a table in a spreadsheet.

```javascript editor-xlsx
// How do I get each column of a table as a separate object in a spreadsheet?

// Count or iterate the columns of a table to inspect their names and settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let columns = table.GetListColumns();
worksheet.GetRange("D1").SetValue("Number of columns:");
worksheet.GetRange("E1").SetValue(columns.length);
worksheet.GetRange("D2").SetValue("First column name:");
worksheet.GetRange("E2").SetValue(columns[0].GetName());
```
