# SetShowTableStyleLastColumn

Sets whether the last column formatting is applied to the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetShowTableStyleLastColumn(bShow);
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | Required | boolean |  | No description provided. |

## Returns

This method doesn't return any data.

## Example

Apply special formatting to the last column of a table in a spreadsheet.

```javascript editor-xlsx
// How do I make the last column of a table stand out visually in a spreadsheet?

// Turn on the last-column highlight to give the rightmost column a distinct look based on the table style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowTableStyleLastColumn(true);

worksheet.GetRange("D1").SetValue("Last column highlight:");
worksheet.GetRange("E1").SetValue(table.GetShowTableStyleLastColumn());
```
