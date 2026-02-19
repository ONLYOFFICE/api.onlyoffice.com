# SetInputMessage

Sets the data validation input message.

## Syntax

```javascript
expression.SetInputMessage(InputMessage);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InputMessage | Required | string |  | The input message. |

## Returns

This method doesn't return any data.

## Example

This example sets the input message text.

```javascript editor-xlsx
// How to set the validation input message.

// Set the input message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Please enter a value greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message has been set");

```
