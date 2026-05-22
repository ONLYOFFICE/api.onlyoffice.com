# SetShowError

Sets whether the data validation error message will be displayed.

## Syntax

```javascript
expression.SetShowError(ShowError);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ShowError | Required | boolean |  | Specifies whether to show error message. |

## Returns

This method doesn't return any data.

## Example

Turn the error alert on or off for a cell that has a validation rule in a spreadsheet.

```javascript editor-xlsx
// How do I make sure an error popup appears whenever someone enters a value that breaks a rule in a spreadsheet?

// Decide whether users see a warning when their input does not meet the required criteria in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Error Title");
validation.SetErrorMessage("Invalid value entered");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message will be shown");
```
