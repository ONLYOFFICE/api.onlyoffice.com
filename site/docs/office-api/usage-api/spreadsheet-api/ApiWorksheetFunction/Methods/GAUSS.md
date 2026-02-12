# GAUSS

Calculates the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean.

## Syntax

```javascript
expression.GAUSS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the distribution will be calculated. |

## Returns

number

## Example

This example shows how to calculate the probability that a member of a standard normal population will fall between the mean and arg1 standard deviations from the mean.

```javascript editor-xlsx
// How to calculate the probability that a member of a standard normal population will fall between two values.

// Use a function to calculate the probability.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.GAUSS(2);
worksheet.GetRange("B2").SetValue(ans);
```
