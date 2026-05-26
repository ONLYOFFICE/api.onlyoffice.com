# DOLLARDE

Converts a dollar price, expressed as a fraction, into a dollar price, expressed as a decimal number.

## Syntax

```javascript
expression.DOLLARDE(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A number expressed as a fraction. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The integer to use in the denominator of the fraction. |

## Returns

number

## Example

Convert a fractional dollar price to its decimal equivalent.

```javascript editor-xlsx
// Transform prices from fractional notation to decimal notation.

// Use the DOLLARDE function to convert fractional prices to decimal format.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DOLLARDE(1.03, 16));
```
