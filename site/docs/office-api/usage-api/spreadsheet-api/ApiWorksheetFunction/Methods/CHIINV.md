# CHIINV

Returns the inverse of the right-tailed probability of the chi-squared distribution.

## Syntax

```javascript
expression.CHIINV(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability associated with the chi-squared distribution, a value between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of degrees of freedom, a number between 1 and 10^10, excluding 10^10. |

## Returns

number

## Example

This example shows how to return the inverse of the right-tailed probability of the chi-squared distribution.

```javascript editor-xlsx
// How to return the inverse of the right-tailed probability of the chi-squared distribution.

// Use function to return the inverse of the right-tailed probability of the chi-squared distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.CHIDIST(0.4, 10);
worksheet.GetRange("B2").SetValue(ans);
```
