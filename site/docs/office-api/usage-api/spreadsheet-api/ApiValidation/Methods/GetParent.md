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

This example gets the parent range of the validation.

```javascript editor-xlsx
// How to retrieve the validation parent range.

// Get the parent range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:A5");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
let parent = validation.GetParent();
worksheet.GetRange("B1").SetValue("Parent range: " + parent.GetAddress());

```
