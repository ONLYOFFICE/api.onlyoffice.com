# T_INV

Returns the left-tailed inverse of the Student's t-distribution.

## Syntax

```javascript
expression.T_INV(arg1, arg2);
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

Find the t-value for a given left-tail probability in a spreadsheet.

```javascript editor-xlsx
// How do I determine the t-value that corresponds to a probability in a spreadsheet?

// Get the inverse of the left-tailed t-distribution to find critical values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let result = func.T_INV(0.75, 2);
worksheet.GetRange("B2").SetValue(result);
```
