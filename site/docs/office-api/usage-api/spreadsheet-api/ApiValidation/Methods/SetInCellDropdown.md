# SetInCellDropdown

Sets whether data validation displays a drop-down list that contains acceptable values.

## Syntax

```javascript
expression.SetInCellDropdown(InCellDropdown);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| InCellDropdown | Required | boolean |  | Specifies whether to display a drop-down list. |

## Returns

This method doesn't return any data.

## Example

Set whether a dropdown list is displayed in a spreadsheet.

```javascript editor-xlsx
// How to show or hide the validation dropdown list in a spreadsheet.

// Set the InCellDropdown setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
validation.SetInCellDropdown(true);
worksheet.GetRange("B1").SetValue("Dropdown is enabled for A1");
```
