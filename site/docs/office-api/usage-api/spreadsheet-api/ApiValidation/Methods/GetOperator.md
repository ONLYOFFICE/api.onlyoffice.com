# GetOperator

Returns the data validation operator.

## Syntax

```javascript
expression.GetOperator();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ValidationOperator](../../Enumeration/ValidationOperator.md)

## Example

Get the data validation operator in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation operator in a spreadsheet.

// Get the operator using the validation API in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);
```
