# GetParent

Returns the parent Sort object.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiSortFields](../ApiSortFields.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiSort](../../ApiSort/ApiSort.md)

## Example

Retrieve the overall sort settings object that owns a collection of sort columns in a spreadsheet.

```javascript editor-xlsx
// How do I access the main sort settings from a list of sort columns in a spreadsheet?

// Trace back from the sort columns to the parent sort object to inspect its orientation or other properties in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
let sortFields = sort.GetSortFields();
let parentSort = sortFields.GetParent();

worksheet.GetRange("C1").SetValue("Parent orientation:");
worksheet.GetRange("D1").SetValue(parentSort.GetOrientation());
```
