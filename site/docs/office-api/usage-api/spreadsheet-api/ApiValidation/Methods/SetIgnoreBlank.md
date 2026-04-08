# SetIgnoreBlank

Sets whether blank values are permitted by the range data validation.

## Syntax

```javascript
expression.SetIgnoreBlank(IgnoreBlank);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| IgnoreBlank | Required | boolean |  | Specifies whether blank values are permitted. |

## Returns

This method doesn't return any data.

## Example

This example sets whether blank values are permitted.

```javascript editor-xlsx
// How to allow or disallow blank values in validation.

// Set the IgnoreBlank setting.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
let validation = range.GetValidation();
validation.Add("xlValidateWholeNumber", "xlValidAlertStop", "xlGreater", 10);
validation.SetIgnoreBlank(false);
worksheet.GetRange("B1").SetValue("Blank values are not allowed");

```
