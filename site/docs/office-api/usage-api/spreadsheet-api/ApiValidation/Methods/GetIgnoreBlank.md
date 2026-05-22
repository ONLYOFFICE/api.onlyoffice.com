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

Check whether empty cells are allowed to bypass a validation rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out if blank entries are permitted in a validated cell in a spreadsheet?

// Confirm whether leaving a cell empty skips the validation check in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(true);
let ignoreBlank = validation.GetIgnoreBlank();
worksheet.GetRange("B1").SetValue("Ignore blank: " + ignoreBlank);
```
