# GetHeader

Returns the header setting. Always "xlYes" for a ListObject.

:::note
This functionality is available in paid ONLYOFFICE Docs editions.
:::

## Syntax

```javascript
expression.GetHeader();
```

`expression` - A variable that represents a [ApiSort](../ApiSort.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read whether a table sort treats the first row as a header in a spreadsheet.

```javascript editor-xlsx
// How do I find out if the sort will skip the header row or include it in a spreadsheet?

// Determine whether the top row is excluded from sorting as a title row in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();

worksheet.GetRange("C1").SetValue("Header setting:");
worksheet.GetRange("D1").SetValue(sort.GetHeader());
```
