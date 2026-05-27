# GetSummary

Returns the summary description (alternative text summary) for the table.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetSummary();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the summary description stored with a table in a spreadsheet.

```javascript editor-xlsx
// How do I read the summary text that has been set on a table in a spreadsheet?

// Pull the table's description text to display or log it alongside other table details in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetSummary("Monthly product sales data");

worksheet.GetRange("D1").SetValue("Summary:");
worksheet.GetRange("E1").SetValue(table.GetSummary());
```
