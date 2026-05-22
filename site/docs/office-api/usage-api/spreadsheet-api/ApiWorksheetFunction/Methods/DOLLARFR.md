# DOLLARFR

Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.

## Syntax

```javascript
expression.DOLLARFR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A decimal number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The integer to use in the denominator of a fraction. |

## Returns

number

## Example

Convert a decimal dollar price to its fractional equivalent.

```javascript editor-xlsx
// Transform prices from decimal notation to fractional notation.

// Use the DOLLARFR function to convert decimal prices to fractional format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));
```
