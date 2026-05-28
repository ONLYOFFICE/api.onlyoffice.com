# EXP

Returns the - **e** constant raised to the power of a given number. The - **e** constant is equal to - **2.71828182845904**, the base of the natural logarithm.

## Syntax

```javascript
expression.EXP(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The exponent applied to the base **e**. |

## Returns

number

## Example

Return the e constant raised to the power of a given number. The e constant is equal to 2.71828182845904, the base of the natural logarithm in a spreadsheet.

```javascript editor-xlsx
// Raise the e constant to a specified power.

// Calculate exponential values using EXP function in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.EXP(5));
```
