# TBILLPRICE

Returns the price per $100 face value for a Treasury bill.

## Syntax

```javascript
expression.TBILLPRICE(arg1, arg2, arg3);
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

Return the price per $100 face value for a Treasury bill in a spreadsheet.

```javascript editor-xlsx
// Calculate the price based on Treasury bill settlement, maturity, and discount rate.

// Apply the TBILLPRICE function with date and discount parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLPRICE("1/1/2018", "1/1/2019", "3.00%"));
```
