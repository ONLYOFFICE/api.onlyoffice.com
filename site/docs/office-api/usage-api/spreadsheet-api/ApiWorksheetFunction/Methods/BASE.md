# BASE

Converts a number into a text representation with the given radix (base).

## Syntax

```javascript
expression.BASE(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to convert. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The base radix into which the number will be converted. An integer greater than or equal to 2 and less than or equal to 36. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The minimum length of the returned string. An integer greater than or equal to 0 and less than 256. If omitted, leading zeros are not added to the result. |

## Returns

number

## Example

Convert a number to a text representation in a chosen base (such as binary or hexadecimal) in a spreadsheet.

```javascript editor-xlsx
// Express a number in a different numeral base in a spreadsheet.

// Rewrite a decimal value as a string in any radix with a minimum digit width in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BASE(5, 2, 5));
```
