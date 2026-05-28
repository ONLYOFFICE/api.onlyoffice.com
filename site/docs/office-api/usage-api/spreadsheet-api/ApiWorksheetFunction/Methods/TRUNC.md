# TRUNC

Truncates a number to an integer by removing the decimal, or fractional, part of the number.

## Syntax

```javascript
expression.TRUNC(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number which will be truncated. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number specifying the precision of the truncation. If this argument is omitted, it is equal to 0 (zero). |

## Returns

number

## Example

Remove decimal places from a number without rounding in a spreadsheet.

```javascript editor-xlsx
// How do I truncate a number to a specific number of decimal places in a spreadsheet?

// Cut off the decimal portion of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TRUNC(3.14159265, 5));
```
