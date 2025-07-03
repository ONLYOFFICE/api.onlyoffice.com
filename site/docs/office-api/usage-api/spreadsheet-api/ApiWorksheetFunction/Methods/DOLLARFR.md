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

This example shows how to convert a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.

```javascript editor-xlsx
// How to convert a dollar price from decimal to fraction.

// Use function to get fraction from decimal price.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.DOLLARFR(1.1875, 16));
```
