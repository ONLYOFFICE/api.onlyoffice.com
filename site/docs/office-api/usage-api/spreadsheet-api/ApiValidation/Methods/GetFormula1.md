# GetFormula1

Returns the first formula in the data validation.

## Syntax

```javascript
expression.GetFormula1();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the first formula in data validation.

```javascript editor-xlsx
// How to retrieve the validation formula.

// Get the first formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let formula1 = validation.GetFormula1();
worksheet.GetRange("B1").SetValue("Formula1: " + formula1);

```
