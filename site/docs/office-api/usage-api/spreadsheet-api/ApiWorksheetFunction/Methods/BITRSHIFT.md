# BITRSHIFT

Returns a number shifted right by the specified number of bits.

## Syntax

```javascript
expression.BITRSHIFT(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of bits by which the number will be shifted right. |

## Returns

number

## Example

Shift a number right by a given number of bits in a spreadsheet.

```javascript editor-xlsx
// What happens when you move the binary representation rightward in a spreadsheet?

// Divide a value by moving its bits toward lower positions in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITRSHIFT(13, 2));
```
