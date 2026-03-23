# DECIMAL

Converts a text representation of a number in a given base into a decimal number.

## Syntax

```javascript
expression.DECIMAL(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The number to convert. The string lenght must be less than or equal to 255 characters. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The base Radix of the number that is converting. An integer greater than or equal to 2 and less than or equal to 36. |

## Returns

number

## Example

This example shows how to convert a text representation of a number in a given base into a decimal number.

```javascript editor-xlsx
// How to get a decimal value from a text.

// Use function to convert a text value to decimal using base.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DECIMAL(101, 2));
```
