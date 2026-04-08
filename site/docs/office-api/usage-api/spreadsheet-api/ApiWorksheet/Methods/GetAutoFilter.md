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

This example gets the autofilter object for a worksheet.

```javascript editor-xlsx
// How to get the AutoFilter object of a worksheet.

// Get the AutoFilter object.

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
