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

This example sets whether the error message is displayed.

```javascript editor-xlsx
// How to show or hide the validation error message.

// Set the ShowError setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Error Title");
validation.SetErrorMessage("Invalid value entered");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message will be shown");

```
