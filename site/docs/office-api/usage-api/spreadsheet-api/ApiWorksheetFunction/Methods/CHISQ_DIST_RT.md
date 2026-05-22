# CHISQ_DIST_RT

Returns the right-tailed probability of the chi-squared distribution.

## Syntax

```javascript
expression.CHISQ_DIST_RT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which the distribution will be evaluated, a nonnegative number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of degrees of freedom, a number between 1 and 10^10, excluding 10^10. |

## Returns

number

## Example

Find what percentage of results exceed a certain value in a chi-squared distribution in a spreadsheet.

```javascript editor-xlsx
// Determine the upper tail probability for comparing observed versus expected frequencies in a spreadsheet.

// Assess how unusual a chi-squared test result is by measuring its right-tail probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST_RT(12, 10));
```
