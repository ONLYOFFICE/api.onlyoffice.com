# GetRange

Returns the ApiRange object that represents the range of the table.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetRange();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Obtain the complete cell range occupied by a table in a spreadsheet.

```javascript editor-xlsx
// How do I get the full address of every cell a table covers in a spreadsheet?

// Capture the entire span of a table, including its header and data rows, for use in other operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let range = table.GetRange();
worksheet.GetRange("D1").SetValue("Table range address:");
worksheet.GetRange("E1").SetValue(range.GetAddress());
```
