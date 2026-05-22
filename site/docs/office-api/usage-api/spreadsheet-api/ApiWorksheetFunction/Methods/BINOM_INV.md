# BINOM_INV

Returns the smallest value for which the cumulative binomial distribution is greater than or equal to a criterion value.

## Syntax

```javascript
expression.BINOM_INV(arg1, arg2, arg3);
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

Find the minimum successes required to reach a target probability in a spreadsheet.

```javascript editor-xlsx
// What is the smallest count of wins needed to hit a certain probability level in a spreadsheet?

// Determine how many successful outcomes satisfy a probability target in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.BINOM_INV(678, 0.1, 0.007);
worksheet.GetRange("B2").SetValue(ans);
```
