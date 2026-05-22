# NOMINAL

Returns the annual nominal interest rate.

## Syntax

```javascript
expression.NOMINAL(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The effective interest rate of the security. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of compounding periods per year. |

## Returns

number

## Example

Calculate the annual nominal interest rate in a spreadsheet.

```javascript editor-xlsx
// Find the stated interest rate from effective rate and compounding periods in a spreadsheet.

// Convert compounded interest into annual percentage rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.NOMINAL(0.7, 4));
```
