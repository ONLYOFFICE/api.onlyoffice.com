# QUOTIENT

Returns the integer portion of a division.

## Syntax

```javascript
expression.QUOTIENT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The dividend, a numeric value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The divisor, a numeric value. |

## Returns

number

## Example

Return the integer portion of a division in a spreadsheet.

```javascript editor-xlsx
// How to get the integer part from the result of division in a spreadsheet.

// Use a function to integer part from division in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));
```
