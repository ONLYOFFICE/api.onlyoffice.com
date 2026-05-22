# BINOMDIST

Returns the individual term binomial distribution probability.

## Syntax

```javascript
expression.BINOMDIST(arg1, arg2, arg3, arg4);
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

Calculate the probability of exactly N successes in independent trials in a spreadsheet.

```javascript editor-xlsx
// How do I find the chance of a specific number of successes occurring in a spreadsheet?

// Evaluate the likelihood of an outcome appearing a fixed number of times in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BINOMDIST(50, 67, 0.45, false));
```
