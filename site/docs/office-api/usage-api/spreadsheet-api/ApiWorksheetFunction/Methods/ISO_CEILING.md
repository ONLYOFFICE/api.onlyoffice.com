# ISO_CEILING

Returns a number that is rounded up to the nearest integer or to the nearest multiple of significance regardless of the sign of the number.
The number is always rounded up regardless of its sing.

## Syntax

```javascript
expression.ISO_CEILING(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The numeric value to round up. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple of significance to round up to. If it is omitted, the default value of 1 is used. If it is set to zero, the function returns 0. |

## Returns

number

## Example

Round a number up to the nearest multiple of a specified significance in a spreadsheet.

```javascript editor-xlsx
// How do I round up numbers following the ISO standard in a spreadsheet?

// Use a function to round negative and positive numbers consistently upward in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISO_CEILING(-6.7, 2));
```
