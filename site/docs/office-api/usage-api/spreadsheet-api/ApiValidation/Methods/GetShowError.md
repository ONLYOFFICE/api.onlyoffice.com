# GetShowError

Returns whether the data validation error message will be displayed.

## Syntax

```javascript
expression.GetShowError();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Get whether the error message is displayed in a spreadsheet.

```javascript editor-xlsx
// How to check if validation shows an error message in a spreadsheet.

// Get the ShowError setting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetShowError(true);
let showError = validation.GetShowError();
worksheet.GetRange("B1").SetValue("Show error: " + showError);
```
