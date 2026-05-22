# BITOR

Returns a bitwise "OR" of two numbers.

## Syntax

```javascript
expression.BITOR(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first decimal representation of the binary number to evaluate. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second decimal representation of the binary number to evaluate. |

## Returns

number

## Example

Combine two numbers using bitwise OR in a spreadsheet.

```javascript editor-xlsx
// Which bits are set in either number in a spreadsheet?

// Merge binary values to include all active bits in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BITOR(23, 10));
```
