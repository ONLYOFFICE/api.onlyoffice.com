# T_DIST_2T

Returns the two-tailed Student's t-distribution.

## Syntax

```javascript
expression.T_DIST_2T(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value at which to evaluate the distribution. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An integer indicating the number of degrees of freedom that characterize the distribution. |

## Returns

number

## Example

This example shows how to return the two-tailed Student's t-distribution.

```javascript editor-xlsx
// How to calculate the two-tailed Student's t-distribution.

// Use a function to estimate the Student's t-distribution right-tailed.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.T_DIST_2T(1.5, 10));
```
