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

This example gets the validation type.

```javascript editor-xlsx
// How to retrieve the validation type.

// Get the validation type.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);

```
