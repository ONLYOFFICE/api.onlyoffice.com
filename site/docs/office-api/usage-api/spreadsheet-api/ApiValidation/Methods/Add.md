# Add

Adds data validation to the specified range.

## Syntax

```javascript
expression.Add(Type, AlertStyle, Operator, Formula1, Formula2);
```

`expression` - A variable that represents a [ApiValidation](../ApiValidation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | Required | [ValidationType](../../Enumeration/ValidationType.md) |  | The validation type. |
| AlertStyle | Optional | [ValidationAlertStyle](../../Enumeration/ValidationAlertStyle.md) |  | The validation alert style. |
| Operator | Optional | [ValidationOperator](../../Enumeration/ValidationOperator.md) |  | The data validation operator. |
| Formula1 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The first formula in the data validation. |
| Formula2 | Optional | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | The second formula in the data validation. |

## Returns

[ApiValidation](../../ApiValidation/ApiValidation.md) \| null

## Example

Attach a data validation rule to a cell range in a spreadsheet.

```javascript editor-xlsx
// How do I restrict what values a user can enter into a cell range in a spreadsheet?

// Enforce an input constraint on specific cells to prevent invalid entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Data Validation for decimal to be more than 10");
const range = worksheet.GetRange("A2:A3");
range.SetValue("10");
const validation = worksheet.GetRange("A2").GetValidation();
validation.Add("xlValidateDecimal", "xlValidAlertWarning", "xlGreater", "12");
worksheet.GetRange("A4").SetValue("Data Validation is now applied for A2 only");
```
