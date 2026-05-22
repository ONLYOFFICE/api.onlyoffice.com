# BESSELJ

Returns the Bessel function Jn(x).

## Syntax

```javascript
expression.BESSELJ(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The order of the Bessel function. |

## Returns

number

## Example

Compute the Bessel function of the first kind for a given value and order in a spreadsheet.

```javascript editor-xlsx
// Evaluate the Bessel function J at a specific order in a spreadsheet.

// Calculate an oscillatory Bessel value commonly used in signal and vibration analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELJ(1.9, 2));
```
