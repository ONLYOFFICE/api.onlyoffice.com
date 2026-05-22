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

Read the comparison operator used in a cell's data validation rule in a spreadsheet.

```javascript editor-xlsx
// How do I find out which condition operator is applied to a validated cell in a spreadsheet?

// Determine whether a validation rule uses greater-than, between, or another comparison type in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);
```
