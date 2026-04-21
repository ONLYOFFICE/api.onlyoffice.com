# GetIgnoreBlank

Returns whether blank values are permitted by the range data validation.

## Syntax

```javascript
expression.GetIgnoreBlank();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get whether blank values are permitted in a spreadsheet.

```javascript editor-xlsx
// How to check if blank values are allowed in validation in a spreadsheet.

// Get the IgnoreBlank setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(true);
let ignoreBlank = validation.GetIgnoreBlank();
worksheet.GetRange("B1").SetValue("Ignore blank: " + ignoreBlank);
```
