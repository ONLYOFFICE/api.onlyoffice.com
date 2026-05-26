# GetOrder

Returns the sort order: "xlAscending" or "xlDescending".

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetOrder();
```

`expression` - A variable that represents a [ApiSortField](../ApiSortField.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[SortOrder](../../Enumeration/SortOrder.md)

## Example

Read whether a sort criterion arranges values from smallest to largest or the reverse in a spreadsheet.

```javascript editor-xlsx
// How do I tell if a sort field is set to ascending or descending in a spreadsheet?

// Verify the direction in which a column's values will be ordered after sorting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlDescending");

worksheet.GetRange("C1").SetValue("Sort order:");
worksheet.GetRange("D1").SetValue(field.GetOrder());
```
