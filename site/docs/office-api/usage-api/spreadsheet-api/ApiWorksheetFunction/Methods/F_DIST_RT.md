# F_DIST_RT

Returns the (right-tailed) F probability distribution (degree of diversity) for two data sets.

## Syntax

```javascript
expression.F_DIST_RT(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function, a nonnegative number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numerator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The denominator degrees of freedom, a number between 1 and 10^10, excluding 10^10. |

## Returns

number

## Example

This example shows how to return the (right-tailed) F probability distribution (degree of diversity) for two data sets.

```javascript editor-xlsx
// How to get the F probability distribution.

// Use function to calculate a right-tailed F probability distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let ans = func.F_DIST_RT(10, 6, 4);
worksheet.GetRange("B2").SetValue(ans);
```
