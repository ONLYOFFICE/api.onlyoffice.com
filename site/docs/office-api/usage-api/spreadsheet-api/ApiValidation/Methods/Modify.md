# Modify

Modifies data validation for a range.

## Syntax

```javascript
expression.Modify(Type, AlertStyle, Operator, Formula1, Formula2);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | Optional | [ValidationType](../../Enumeration/ValidationType.md) |  | The validation type. |
| AlertStyle | Optional | [ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md) |  | The validation alert style. |
| Operator | Optional | [ValidationOperator](../../Enumeration/ValidationOperator.md) |  | The data validation operator. |
| Formula1 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The first formula in the data validation. |
| Formula2 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The second formula in the data validation. |

## Returns

[ApiValidation](../../ApiValidation/ApiValidation.md) \| null

## Example

This example modifies a data validation rule for a range of cells.

```javascript editor-xlsx
// How to change data validation for a range of cells.

// Get a range from the worksheet and modify its data validation.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10 for A2 and A5");
const range = worksheet.GetRange("A2:A5");
const targetRange = worksheet.GetRange("A4:A5");
range.SetValue("10");
const validation = range.GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
targetRange.GetValidation().Modify("xlValidateDecimal", "xlValidAlertStop", "xlLess", "12");
worksheet.GetRange("A6").SetValue("Data Validation is now modified for A4:A5, to accept values less than 12.");

```
