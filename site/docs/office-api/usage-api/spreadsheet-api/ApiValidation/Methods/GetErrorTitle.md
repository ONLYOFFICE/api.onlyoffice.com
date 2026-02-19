# GetErrorTitle

Returns the title of the data-validation error dialog box.

## Syntax

```javascript
expression.GetErrorTitle();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the error message title.

```javascript editor-xlsx
// How to retrieve the validation error title.

// Get the error title.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
let errorTitle = validation.GetErrorTitle();
worksheet.GetRange("B1").SetValue("Error title: " + errorTitle);

```
