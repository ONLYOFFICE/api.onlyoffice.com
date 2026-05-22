# CRITBINOM

Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.

## Syntax

```javascript
expression.CRITBINOM(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of Bernoulli trials. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability of success on each trial, a number between 0 and 1 inclusive. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The criterion value, a number between 0 and 1 inclusive. |

## Returns

number

## Example

Find the smallest number that meets your probability threshold in a spreadsheet.

```javascript editor-xlsx
// What is the minimum value where cumulative probability exceeds your target in a spreadsheet?

// Identify the threshold value for a binomial distribution in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.CRITBINOM(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);
```
