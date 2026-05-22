# GetSort

Returns the Sort object for this list object.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetSort();
```

`expression` - A variable that represents a [ApiListObject](../ApiListObject.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSort](../../ApiSort/ApiSort.md)

## Example

Retrieve the sort settings attached to a table in a spreadsheet.

```javascript editor-xlsx
// How do I access the sorting configuration of a table in a spreadsheet?

// Inspect the current sort order of a table before applying or overriding it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let sort = table.GetSort();
worksheet.GetRange("D1").SetValue("Sort orientation:");
worksheet.GetRange("E1").SetValue(sort.GetOrientation());
```
