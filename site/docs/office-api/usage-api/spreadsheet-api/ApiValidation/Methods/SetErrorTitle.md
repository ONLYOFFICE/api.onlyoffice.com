# SetErrorTitle

Sets the title of the data-validation error dialog box.

## Syntax

```javascript
expression.SetErrorTitle(ErrorTitle);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ErrorTitle | Required | string |  | The error dialog title. |

## Returns

This method doesn't return any data.

## Example

Assign the heading text of the alert dialog that appears for invalid cell entries in a spreadsheet.

```javascript editor-xlsx
// How do I set a custom title for the error popup that shows when validation fails in a spreadsheet?

// Label the error window with a meaningful heading so users immediately understand what went wrong in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetErrorTitle("Invalid Input");
validation.SetShowError(true);
worksheet.GetRange("B1").SetValue("Error title has been set");
```
