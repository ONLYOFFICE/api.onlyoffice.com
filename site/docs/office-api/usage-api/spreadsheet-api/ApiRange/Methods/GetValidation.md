# GetValidation

Returns the data validation object associated with this range. If no validation object exists yet, it will be created.

## Syntax

```javascript
expression.GetValidation();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiValidation](../../ApiValidation/ApiValidation.md)

## Example

Retrieve the data validation rule set on a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I access the validation settings applied to a range in a spreadsheet?

// Inspect and configure input restrictions on a range by reading its validation object in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange('A1').SetValue('Try to enter a whole number less than 10 in A2:B5. Warning will be shown.');
const range = worksheet.GetRange('A2:B5');
const validation = range.GetValidation();
validation.Add('xlValidateWholeNumber', 'xlValidAlertWarning', 'xlGreater', 10);

worksheet.GetRange('A7').SetValue('Type:');
worksheet.GetRange('B7').SetValue(validation.GetType());
worksheet.GetRange('A8').SetValue('Range:');
worksheet.GetRange('B8').SetValue(validation.GetParent().GetAddress());
```
