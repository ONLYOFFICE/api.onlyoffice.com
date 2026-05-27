# SetShowAutoFilter

Sets whether the AutoFilter is present on the table.
Setting to false removes the AutoFilter entirely; setting to true creates it if not present.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetShowAutoFilter(show);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | Required | boolean |  | Specifies whether the AutoFilter is present on the table. |

## Returns

This method doesn't return any data.

## Example

Show or hide the filter controls on a table header row in a spreadsheet.

```javascript editor-xlsx
// How do I turn the AutoFilter on or off for a table in a spreadsheet?

// Remove all filter buttons from a table to present a cleaner view in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilter(false);

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());
```
