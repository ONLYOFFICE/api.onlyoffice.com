# SetTotalsCalculation

Sets the totals calculation type for the column.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetTotalsCalculation(sType);
```

`expression` - A variable that represents a [ApiListColumn](../ApiListColumn.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [XlTotalsCalculation](../../Enumeration/XlTotalsCalculation.md) |  | The totals calculation type. |

## Returns

This method doesn't return any data.

## Example

Assign a summary function to the totals row of a table column in a spreadsheet.

```javascript editor-xlsx
// How do I make a table column show a sum or average in its totals row in a spreadsheet?

// Choose the right calculation type for a column to present meaningful totals to readers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

let column = table.GetListColumns()[1];
column.SetTotalsCalculation("xlTotalsCalculationSum");

worksheet.GetRange("D1").SetValue("Totals calculation set to:");
worksheet.GetRange("E1").SetValue(column.GetTotalsCalculation());
```
