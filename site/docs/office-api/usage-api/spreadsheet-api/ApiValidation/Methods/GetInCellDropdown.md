# GetInCellDropdown

Returns whether data validation displays a drop-down list that contains acceptable values.

## Syntax

```javascript
expression.GetInCellDropdown();
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example gets whether a dropdown list is displayed.

```javascript editor-xlsx
// How to check if validation displays a dropdown list.

// Get the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
let hasDropdown = validation.GetInCellDropdown();
worksheet.GetRange("B1").SetValue("Has dropdown: " + hasDropdown);

```
