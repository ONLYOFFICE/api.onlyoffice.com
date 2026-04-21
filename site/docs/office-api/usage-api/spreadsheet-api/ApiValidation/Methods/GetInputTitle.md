# GetInputTitle

Returns the title of the data-validation input dialog box.

## Syntax

```javascript
expression.GetInputTitle();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the input message title in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation input title in a spreadsheet.

// Get the input title using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputTitle("Enter Value");
let inputTitle = validation.GetInputTitle();
worksheet.GetRange("B1").SetValue("Input title: " + inputTitle);
```
