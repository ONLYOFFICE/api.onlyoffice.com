# GetErrorMessage

Returns the data validation error message.

## Syntax

```javascript
expression.GetErrorMessage();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the error message text in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation error message in a spreadsheet.

// Get the error message using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("Value must be greater than 10");
let errorMessage = validation.GetErrorMessage();
worksheet.GetRange("B1").SetValue("Error message: " + errorMessage);
```
