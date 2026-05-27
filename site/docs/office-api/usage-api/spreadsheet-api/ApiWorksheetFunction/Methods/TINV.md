# TINV

Returns the two-tailed inverse of the Student's t-distribution.

## Syntax

```javascript
expression.TINV(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A positive integer indicating the number of degrees of freedom to characterize the distribution. |

## Returns

number

## Example

Return the two-tailed inverse of the Student's t-distribution in a spreadsheet.

```javascript editor-xlsx
// Calculate the inverse t-value for a given probability and degrees of freedom.

// Apply the TINV function with probability and degrees of freedom parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);
```
