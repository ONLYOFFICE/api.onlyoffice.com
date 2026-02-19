# SetErrorMessage

Sets the data validation error message.

## Syntax

```javascript
expression.SetErrorMessage(ErrorMessage);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ErrorMessage | Required | string |  | The error message. |

## Returns

This method doesn't return any data.

## Example

This example sets the error message text.

```javascript editor-xlsx
// How to set the validation error message.

// Set the error message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorMessage("The value must be greater than 10");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error message has been set");

```
