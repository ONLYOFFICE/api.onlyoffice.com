# GetParent

Returns the parent range object.

## Syntax

```javascript
expression.GetParent();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiRange](../../ApiRange/ApiRange.md)

## Example

Get the parent range of the validation in a spreadsheet.

```javascript editor-xlsx
// How to retrieve the validation parent range in a spreadsheet.

// Get the parent for a validation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let parent = validation.GetParent();
worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());
```
