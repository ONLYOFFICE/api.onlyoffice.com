# TBILLEQ

Returns the bond-equivalent yield for a treasury bill.

## Syntax

```javascript
expression.TBILLEQ(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The discount rate of the Treasury bill. |

## Returns

number

## Example

Return the bond-equivalent yield for a treasury bill in a spreadsheet.

```javascript editor-xlsx
// Calculate the bond-equivalent yield for a treasury bill using the TBILLEQ function.

// Returns the bond-equivalent yield value for the specified dates and discount rate.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLEQ("1/1/2018", "11/20/2018", "8.00%"));
```
