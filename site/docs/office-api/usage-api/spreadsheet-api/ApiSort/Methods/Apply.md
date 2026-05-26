# Apply

Applies the current sort settings to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.Apply();
```

`expression` - A variable that represents a [ApiSort](../ApiSort.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

Run a sort on a formatted table using pre-configured sort fields in a spreadsheet.

```javascript editor-xlsx
// How do I trigger the sort after defining which columns to sort by in a spreadsheet?

// Execute the pending sort rules to reorder the table's rows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
sortFields.Add(worksheet.GetRange("A2:A4"), "xlSortOnValues", "xlAscending");
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());
```
