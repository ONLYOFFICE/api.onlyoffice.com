# EFFECT

Returns the effective annual interest rate.

## Syntax

```javascript
expression.EFFECT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The nominal interest rate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of compounding periods per year. |

## Returns

number

## Example

Return the effective annual interest rate in a spreadsheet.

```javascript editor-xlsx
// How to get an effective annual interest rate in a spreadsheet.

// Use function to get effective annual interest rate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EFFECT(0.57, 4));
```
