# SetShowTableStyleColumnStripes

Sets whether banded column formatting is applied to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetShowTableStyleColumnStripes(bShow);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | Required | boolean |  | No description provided. |

## Returns

This method doesn't return any data.

## Example

Turn alternating column shading on or off for a table in a spreadsheet.

```javascript editor-xlsx
// How do I apply column stripes to a table style in a spreadsheet?

// Improve column readability by letting the table style alternate background colors across columns in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleColumnStripes(true);

worksheet.GetRange("D1").SetValue("Column stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleColumnStripes());
```
