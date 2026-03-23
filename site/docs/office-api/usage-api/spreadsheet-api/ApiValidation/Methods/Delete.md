# Delete

Deletes the object.

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

This method doesn't return any data.

## Example

This example deletes a data validation rule from a range of cells.

```javascript editor-xlsx
// How to remove data validation from a range of cells.

// Get a range from the worksheet and delete its data validation.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimals to be more than 10 for A2 and A3");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
const targetedRange = worksheet.GetRange("A2");
targetedRange.GetValidation().Delete();
worksheet.GetRange("A4").SetValue("Data Validation is now removed for A2");
```
