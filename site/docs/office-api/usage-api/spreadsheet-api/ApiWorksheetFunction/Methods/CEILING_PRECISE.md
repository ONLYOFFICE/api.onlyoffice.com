# CEILING_PRECISE

Returns a number that is rounded up to the nearest integer or to the nearest multiple of significance. The number is always rounded up regardless of its sing.

## Syntax

```javascript
expression.CEILING_PRECISE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round up. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. If it is omitted, the default value of 1 is used. If it is set to zero, the function returns 0. |

## Returns

number

## Example

Round any number upward consistently in a spreadsheet.

```javascript editor-xlsx
// What is the precise ceiling for positive and negative values in a spreadsheet?

// Always round toward positive infinity by a specified interval in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING_PRECISE(-6.7, 2));
```
