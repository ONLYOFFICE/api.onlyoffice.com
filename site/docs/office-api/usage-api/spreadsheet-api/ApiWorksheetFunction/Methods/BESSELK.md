# BESSELK

Returns the modified Bessel function Kn(x).

## Syntax

```javascript
expression.BESSELK(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The order of the function. |

## Returns

number

## Example

Evaluate the modified Bessel function of the second kind in a spreadsheet.

```javascript editor-xlsx
// How do I find the Bessel K function result for engineering calculations in a spreadsheet?

// Apply mathematical modeling for wave propagation and oscillatory behavior in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELK(1.5, 1));
```
