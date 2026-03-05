# GetFormula2

Returns the second formula in the data validation.

## Syntax

```javascript
expression.GetFormula2();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

This example gets the second formula in data validation.

```javascript editor-xlsx
// How to retrieve the second validation formula.

// Get the second formula.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlBetween", 10, 20);
let formula2 = validation.GetFormula2();
worksheet.GetRange("B1").SetValue("Formula2: " + formula2);

```
