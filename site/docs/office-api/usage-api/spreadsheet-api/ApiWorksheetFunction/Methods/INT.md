# INT

Rounds a number down to the nearest integer.

## Syntax

```javascript
expression.INT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The real number to round down to an integer. |

## Returns

number

## Example

Round a number down to the nearest integer in a spreadsheet.

```javascript editor-xlsx
// How do I round down a decimal number in a spreadsheet?

// Truncate decimal places from a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.INT(2.3));
```
