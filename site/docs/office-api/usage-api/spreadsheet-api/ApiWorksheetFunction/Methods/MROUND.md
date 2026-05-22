# MROUND

Returns a number rounded to the desired multiple.

## Syntax

```javascript
expression.MROUND(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The multiple to round the number to. |

## Returns

number

## Example

Round a number to the nearest multiple of another value in a spreadsheet.

```javascript editor-xlsx
// What is a number rounded to a specific multiple in a spreadsheet?

// Adjust a value to the closest increment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MROUND(14.35, 0.4));
```
