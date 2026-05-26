# GetShowAutoFilter

Returns whether the AutoFilter dropdown buttons are displayed on the header row of the table.
Returns true by default for a new table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetShowAutoFilter();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Read whether the auto-filter is currently turned on for a table in a spreadsheet.

```javascript editor-xlsx
// How do I check if the auto-filter is active on a table in a spreadsheet?

// Confirm the filter bar is present before relying on any filter controls the table provides in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Show AutoFilter:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilter());
```
