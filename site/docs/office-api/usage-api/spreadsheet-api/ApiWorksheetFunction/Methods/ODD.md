# ODD

Rounds a positive number up and negative number down to the nearest odd integer.

## Syntax

```javascript
expression.ODD(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value to round. |

## Returns

number

## Example

Round a number to the nearest odd integer in a spreadsheet.

```javascript editor-xlsx
// How do I round a value to the nearest odd number in a spreadsheet?

// Find the closest odd integer above or below a given number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ODD(7.675));
```
