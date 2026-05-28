# SetSortOn

Sets the sort-on type.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetSortOn(sSortOn);
```

`expression` - A variable that represents a [ApiSortField](../ApiSortField.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSortOn | Required | [XlSortOn](../../Enumeration/XlSortOn.md) |  | The value used as the sort criteria. |

## Returns

This method doesn't return any data.

## Example

Switch a sort column from ordering by value to ordering by cell color in a spreadsheet.

```javascript editor-xlsx
// How do I make a column sort by background color instead of text in a spreadsheet?

// Change what a sort column is based on so rows group by color rather than content in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("A3").SetValue("Apples");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1:A3"), "xlSortOnValues", "xlAscending");
field.SetSortOn("xlSortOnCellColor");

worksheet.GetRange("C1").SetValue("Sort on after change:");
worksheet.GetRange("D1").SetValue(field.GetSortOn());
```
