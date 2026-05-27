# TDIST

Returns the Student's t-distribution.

## Syntax

```javascript
expression.TDIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Specifies the number of distribution tails to return: one-tailed distribution = 1; two-tailed distribution = 2. |

## Returns

number

## Example

Return the Student's t-distribution in a spreadsheet.

```javascript editor-xlsx
// Calculate the probability for the t-distribution with given degrees of freedom.

// Apply the TDIST function with t-value and degrees of freedom parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.TDIST(1.5, 10, 1);
worksheet.GetRange("B2").SetValue(ans);
```
