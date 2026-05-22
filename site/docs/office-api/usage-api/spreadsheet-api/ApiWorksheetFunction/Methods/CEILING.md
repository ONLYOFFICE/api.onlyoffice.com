# CEILING

Rounds a number up, to the nearest multiple of significance.

## Syntax

```javascript
expression.CEILING(arg1, arg2);
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

Round numbers up to the nearest increment in a spreadsheet.

```javascript editor-xlsx
// What is the next whole value above a decimal in a spreadsheet?

// Force rounding upward to meet a specific interval in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.CEILING(1.23, 0.1));
```
