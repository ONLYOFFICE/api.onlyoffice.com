# BINOM_DIST_RANGE

Returns the probability of a trial result using a binomial distribution.

## Syntax

```javascript
expression.BINOM_DIST_RANGE(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of independent trials. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability of success on each trial. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The minimum number of successes in the trials to calculate probability for, a numeric value greater than or equal to 0. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maximum number of successes in the trials to calculate probability for, a numeric value greater than the minimum number of successes and less than or equal to trials. |

## Returns

number

## Example

Calculate the probability of success within a specific range in a spreadsheet.

```javascript editor-xlsx
// What is the chance of getting between X and Y successes in N attempts in a spreadsheet?

// Estimate outcomes when trials have consistent success rates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST_RANGE(60, 0.75, 45, 50));
```
