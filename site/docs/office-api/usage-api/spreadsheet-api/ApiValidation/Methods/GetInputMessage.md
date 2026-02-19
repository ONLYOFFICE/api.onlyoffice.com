# GetInputMessage

Returns the data validation input message.

## Syntax

```javascript
expression.GetInputMessage();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the input message text.

```javascript editor-xlsx
// How to retrieve the validation input message.

// Get the input message.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetInputMessage("Enter a number greater than 10");
let inputMessage = validation.GetInputMessage();
worksheet.GetRange("B1").SetValue("Input message: " + inputMessage);

```
