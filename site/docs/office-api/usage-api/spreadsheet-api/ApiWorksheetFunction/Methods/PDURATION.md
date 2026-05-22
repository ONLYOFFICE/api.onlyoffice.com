# PDURATION

Returns the number of periods required by an investment to reach a specified value.

## Syntax

```javascript
expression.PDURATION(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The interest rate per period. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The present value of the investment. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The desired future value of the investment. |

## Returns

number

## Example

Calculate how many periods an investment needs to reach a target amount in a spreadsheet.

```javascript editor-xlsx
// How do I find the time required for an investment to grow to a specific value in a spreadsheet?

// Determine the number of investment periods until a desired return is achieved in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.PDURATION("2.50%", 2000, 2200));
```
