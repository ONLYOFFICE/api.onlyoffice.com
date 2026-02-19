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

This example gets the data validation operator.

```javascript editor-xlsx
// How to retrieve the validation operator.

// Get the operator.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let operator = validation.GetOperator();
worksheet.GetRange("B1").SetValue("Operator: " + operator);

```
