# TBILLYIELD

Returns the yield for a Treasury bill.

## Syntax

```javascript
expression.TBILLYIELD(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The settlement date of the Treasury bill, expressed as a serial date number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The maturity date of the Treasury bill, expressed as a serial date number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The purchase price of the Treasury bill, per $100 par value. |

## Returns

number

## Example

Return the yield for a Treasury bill in a spreadsheet.

```javascript editor-xlsx
// Calculate the yield based on settlement date, maturity date, and price.

// Apply the TBILLYIELD function with Treasury bill parameters.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.TBILLYIELD("2/15/2018", "6/1/2018", 99.5));
```
