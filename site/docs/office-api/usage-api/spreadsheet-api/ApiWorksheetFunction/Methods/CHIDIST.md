# CHIDIST

Returns the right-tailed probability of the chi-squared distribution.

## Syntax

```javascript
expression.CHIDIST(arg1, arg2);
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

This example shows how to return the right-tailed probability of the chi-squared distribution.

```javascript editor-xlsx playground
// How to return the right-tailed probability of the chi-squared distribution.

// Use function to return the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let avg = func.CHIDIST(12, 10);
worksheet.GetRange("B2").SetValue(avg);
```
