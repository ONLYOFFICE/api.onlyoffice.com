# DELTA

Tests whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.

## Syntax

```javascript
expression.DELTA(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first number. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second number. |

## Returns

number

## Example

Check if two numbers are identical in a spreadsheet.

```javascript editor-xlsx
// Are these two values the same or different in a spreadsheet?

// Verify whether your numbers match by returning 1 for equal or 0 for different in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));
```
