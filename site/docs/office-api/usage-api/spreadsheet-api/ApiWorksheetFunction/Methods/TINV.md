# TINV

Returns the two-tailed inverse of the Student's t-distribution.

## Syntax

```javascript
expression.TINV(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The probability associated with the two-tailed Student's t-distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A positive integer indicating the number of degrees of freedom to characterize the distribution. |

## Returns

number

## Example

This example shows how to return the two-tailed inverse of the Student's t-distribution.

```javascript editor-xlsx
// How to create a serial number from the two-tailed inverse.

// Use a function to get two-tailed inverse of the Student's t-distribution.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let result = func.TINV(0.5, 10);
worksheet.GetRange("B2").SetValue(result);


```
