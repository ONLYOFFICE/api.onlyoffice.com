# ROUNDUP

Rounds a number up, away from zero.

## Syntax

```javascript
expression.ROUNDUP(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number that will be rounded up. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of digits to round to. If this argument is negative, the number will be rounded to the left of the decimal point. If it is equal to zero, the number will be rounded to the nearest integer. |

## Returns

number

## Example

This example shows how to round a number up, away from zero.

```javascript editor-xlsx
// How to round a number up.

// Use a function to round a number away from zero.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ROUNDUP(3.456, 0));
```
