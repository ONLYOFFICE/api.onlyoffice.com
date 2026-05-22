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

Control whether a validation input message appears when a cell is selected in a spreadsheet.

```javascript editor-xlsx
// How do I show or hide the hint message that guides users when they click a validated cell in a spreadsheet?

// Toggle the input prompt on so users see instructions before entering a value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Input Title");
validation.SetInputMessage("Please enter a number greater than 10");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input message will be shown");
```
