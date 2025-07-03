# GESTEP

Tests whether a number is greater than a threshold value. The function returns 1 if the number is greater than or equal to the threshold value and 0 otherwise.

## Syntax

```javascript
expression.GESTEP(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to test against step. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The threshold value. |

## Returns

number

## Example

This example shows how to test whether a number is greater than a threshold value. The function returns 1 if the number is greater than or equal to the threshold value and 0 otherwise.

```javascript editor-xlsx
// How to compare a number with a threshold value.

// Use a function to find out whether a value greater than a limit.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.GESTEP(-2, 2));
```
