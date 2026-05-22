# BINOM_DIST

Returns the individual term binomial distribution probability.

## Syntax

```javascript
expression.BINOM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of successes in trials. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of independent trials. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability of success on each trial. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | Specifies if this is the cumulative distribution function (**true**) or the probability mass function (**false**). |

## Returns

number

## Example

Calculate cumulative or individual binomial distribution probability in a spreadsheet.

```javascript editor-xlsx
// How do I determine the chance of successes in a series of repeated attempts in a spreadsheet?

// Evaluate the probability of reaching a target number of positive outcomes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOM_DIST(50, 67, 0.45, false));
```
