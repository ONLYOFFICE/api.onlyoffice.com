# SetShowInput

Sets whether the data validation input message will be displayed.

## Syntax

```javascript
expression.SetShowInput(ShowInput);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ShowInput | Required | boolean |  | Specifies whether to show input message. |

## Returns

This method doesn't return any data.

## Example

This example sets whether the input message is displayed.

```javascript editor-xlsx
// How to show or hide the validation input message.

// Set the ShowInput setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Input Title");
validation.SetInputMessage("Please enter a number greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message will be shown");

```
