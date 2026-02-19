# SetInputTitle

Sets the title of the data-validation input dialog box.

## Syntax

```javascript
expression.SetInputTitle(InputTitle);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InputTitle | Required | string |  | The input dialog title. |

## Returns

This method doesn't return any data.

## Example

This example sets the input message title.

```javascript editor-xlsx
// How to set the validation input title.

// Set the input title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
validation.SetShowInput(true);
worksheet.GetRange("B1").SetValue("Input title has been set");

```
