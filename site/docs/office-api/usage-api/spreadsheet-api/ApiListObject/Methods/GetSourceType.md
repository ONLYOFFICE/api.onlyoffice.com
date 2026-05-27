# GetSourceType

Returns the source type of the table. Always returns "xlSrcRange" for range-based tables.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetSourceType();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Retrieve the data source type of a table in a spreadsheet.

```javascript editor-xlsx
// How do I find out where a table gets its data from in a spreadsheet?

// Identify whether a table draws from a local range or an external connection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

worksheet.GetRange("D1").SetValue("Source type:");
worksheet.GetRange("E1").SetValue(table.GetSourceType());
```
