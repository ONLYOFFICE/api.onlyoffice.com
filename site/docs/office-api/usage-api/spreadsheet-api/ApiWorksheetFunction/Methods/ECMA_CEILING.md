# ECMA_CEILING

Rounds the number up to the nearest multiple of significance. Negative numbers are rounded towards zero.

## Syntax

```javascript
expression.ECMA_CEILING(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. |

## Returns

number

## Example

Round a number up to the nearest specified multiple in a spreadsheet.

```javascript editor-xlsx
// How do I round numbers to the nearest increment in a spreadsheet?

// Increase values to align with a specific rounding factor in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ECMA_CEILING(1.567, 0.1));
```
