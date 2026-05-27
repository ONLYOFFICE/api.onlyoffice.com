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

Enable or disable the drop-down arrow that lets users pick from allowed values in a spreadsheet.

```javascript editor-xlsx
// How do I show a selectable list inside a cell that has a list-based validation rule in a spreadsheet?

// Make it easier for users to enter valid data by displaying a clickable menu of options in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateList", null, null, "Apple,Banana,Cherry");
validation.SetInCellDropdown(true);
worksheet.GetRange("B1").SetValue("Dropdown is enabled for A1");
```
