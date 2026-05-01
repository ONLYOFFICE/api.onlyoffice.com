# GetType

Returns the validation type.

## Syntax

```javascript
expression.GetType();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ValidationType](../../Enumeration/ValidationType.md)

## Example

Get the validation type in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation type in a spreadsheet.

// Get the validation type using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);
```
