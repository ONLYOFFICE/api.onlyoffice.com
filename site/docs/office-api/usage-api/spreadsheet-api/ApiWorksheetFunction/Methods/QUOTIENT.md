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

Get the whole number result of dividing one value by another in a spreadsheet.

```javascript editor-xlsx
// How do I find the integer portion of a division in a spreadsheet?

// Extract the quotient without the remainder from two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.QUOTIENT(1698, 30));
```
