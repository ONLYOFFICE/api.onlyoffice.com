# GetAlertStyle

Returns the validation alert style.

## Syntax

```javascript
expression.GetAlertStyle();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md)

## Example

Get the validation alert style in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation alert style in a spreadsheet.

// Get the validation alert style in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);
```
