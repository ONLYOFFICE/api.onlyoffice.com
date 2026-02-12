# HEX2DEC

Converts a hexadecimal number to decimal.

## Syntax

```javascript
expression.HEX2DEC(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The hexadecimal number to convert. |

## Returns

number

## Example

This example shows how to convert a hexadecimal number to decimal.

```javascript editor-xlsx playground
// How to get a decimal from hexadecimal number.

// Use a function to convert a hexadecimal number to decimal.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.HEX2DEC("FFFFFFFF9C"));
```
