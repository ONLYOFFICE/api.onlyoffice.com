# SetShowAutoFilterDropDown

Sets whether the AutoFilter dropdown arrows are displayed on the header row of the table.
Does not remove the AutoFilter itself, only hides or shows the dropdown buttons.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.SetShowAutoFilterDropDown(bShow);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | Required | boolean |  | Pass true to show the dropdown arrows, false to hide them. |

## Returns

This method doesn't return any data.

## Example

Hide the filter drop-down arrows on a table without removing the filter in a spreadsheet.

```javascript editor-xlsx
// How do I show or hide the drop-down arrows in a table header in a spreadsheet?

// Prevent users from changing filter settings while keeping existing criteria intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilterDropDown(false);

worksheet.GetRange("D1").SetValue("Show dropdown:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilterDropDown());
```
