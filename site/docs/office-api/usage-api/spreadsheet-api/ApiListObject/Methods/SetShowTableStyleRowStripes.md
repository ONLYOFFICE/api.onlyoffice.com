# SetShowTableStyleRowStripes

Sets whether banded row formatting is applied to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetShowTableStyleRowStripes(show);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | Required | boolean |  | Specifies whether banded row formatting is applied to the table. |

## Returns

This method doesn't return any data.

## Example

Control whether a table displays alternating row colors in a spreadsheet.

```javascript editor-xlsx
// How do I turn alternating row shading on or off for a table in a spreadsheet?

// Toggle row stripes so the table style applies contrasting backgrounds to every other row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleRowStripes(false);

worksheet.GetRange("D1").SetValue("Row stripes:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleRowStripes());
```
