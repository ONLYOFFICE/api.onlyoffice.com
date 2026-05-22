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

Read the kind of rule that restricts what values a cell accepts in a spreadsheet.

```javascript editor-xlsx
// How do I find out what type of data rule is applied to a cell in a spreadsheet?

// Identify whether a cell expects whole numbers, decimals, dates, or another category in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let validationType = validation.GetType();
worksheet.GetRange("B1").SetValue("Validation type: " + validationType);
```
