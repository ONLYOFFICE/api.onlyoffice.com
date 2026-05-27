# GetAutoFilter

Returns the instante of ApiAutoFilter object that represents the worksheet AutoFilter.

## Syntax

```javascript
expression.GetAutoFilter();
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiAutoFilter](../../ApiAutoFilter/ApiAutoFilter.md)

## Example

Retrieve the active auto filter from a worksheet in a spreadsheet.

```javascript editor-xlsx
// How do I access the auto filter applied to a sheet in a spreadsheet?

// Read the filtered range address by obtaining the worksheet's auto filter in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Cherry");
let range = worksheet.GetRange("A1:A4");
range.SetAutoFilter();
let autoFilter = worksheet.GetAutoFilter();
let filterRange = autoFilter.GetRange();
worksheet.GetRange("C1").SetValue("AutoFilter range:");
worksheet.GetRange("C2").SetValue(filterRange.GetAddress());
```
