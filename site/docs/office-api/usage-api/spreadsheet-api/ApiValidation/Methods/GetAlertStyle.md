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

This example gets the validation alert style.

```javascript editor-xlsx
// How to retrieve the validation alert style.

// Get the validation alert style.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertWarning", "xlGreater", 10);
let alertStyle = validation.GetAlertStyle();
worksheet.GetRange("B1").SetValue("Alert style: " + alertStyle);

```
