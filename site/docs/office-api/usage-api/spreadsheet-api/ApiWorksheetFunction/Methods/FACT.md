# FACT

Returns the factorial of a number, which is equal to *1*2*3*...** number.

## Syntax

```javascript
expression.FACT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The nonnegative number for which the factorial will be calculated. |

## Returns

number

## Example

Return the factorial of a number, which is equal to 123 *...* number in a spreadsheet.

```javascript editor-xlsx
// Calculate the factorial of a number.

// Apply FACT function to get the factorial value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACT(123));
```
