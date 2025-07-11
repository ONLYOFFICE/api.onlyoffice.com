# CHISQ_DIST

Returns the left-tailed probability of the chi-squared distribution.

## Syntax

```javascript
expression.CHISQ_DIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which the distribution will be evaluated, a nonnegative number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of degrees of freedom, a number between 1 and 10^10, excluding 10^10. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value that determines the form of the function. If this argument is equal to **true**, the cumulative distribution function is returned; if  it is equal to **false**, the probability density function is returned. |

## Returns

number

## Example

This example shows how to return the left-tailed probability of the chi-squared distribution.

```javascript editor-xlsx
// How to return the left-tailed probability of the chi-squared distribution.

// Use function to return the left-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CHISQ_DIST(2, 3, false));
```
