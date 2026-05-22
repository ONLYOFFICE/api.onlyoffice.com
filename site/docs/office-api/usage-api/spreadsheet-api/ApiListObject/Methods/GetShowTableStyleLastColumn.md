# GetShowTableStyleLastColumn

Returns whether the last column formatting is applied to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetShowTableStyleLastColumn();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Read whether the last column of a table has special highlight formatting in a spreadsheet.

```javascript editor-xlsx
// How do I check if the last column stands out with distinct styling in a spreadsheet?

// Determine if the table draws attention to its rightmost column before modifying the layout in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Last column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleLastColumn());
```
