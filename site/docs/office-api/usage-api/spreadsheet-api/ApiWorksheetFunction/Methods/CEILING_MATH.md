# CEILING_MATH

Rounds a number up, to the nearest integer or to the nearest multiple of significance.

## Syntax

```javascript
expression.CEILING_MATH(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. If it is omitted, the default value of 1 is used. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Specifies if negative numbers are rounded towards or away from zero. If it is omitted or set to 0, negative numbers are rounded towards zero. If any other numeric value is specified, negative numbers are rounded away from zero. |

## Returns

number

## Example

This example shows how to round a number up, to the nearest integer or to the nearest multiple of significance.

```javascript editor-xlsx
// How to round a number up.

// Use function to round a number up the nearest integer or to the nearest multiple of significance.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.CEILING_MATH(-5.5, 2, 1));
```
