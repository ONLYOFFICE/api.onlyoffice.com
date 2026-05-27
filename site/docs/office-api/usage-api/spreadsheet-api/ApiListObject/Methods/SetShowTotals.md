# SetShowTotals

Sets whether the totals row is displayed for the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetShowTotals(show);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | Required | boolean |  | Specifies whether the totals row is displayed for the table. |

## Returns

This method doesn't return any data.

## Example

Add a totals row to the bottom of a table in a spreadsheet.

```javascript editor-xlsx
// How do I show or hide the totals row of a table in a spreadsheet?

// Enable the totals row so each column can display a summary value such as a sum or count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTotals(true);

worksheet.GetRange("D1").SetValue("Show totals:");
worksheet.GetRange("E1").SetValue(table.GetShowTotals());
```
