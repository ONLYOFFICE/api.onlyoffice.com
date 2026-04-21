# DELTA

Tests whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise.

## Syntax

```javascript
expression.DELTA(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The first number. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The second number. |

## Returns

number

## Example

Test whether two numbers are equal. The function returns 1 if the numbers are equal and 0 otherwise in a spreadsheet.

```javascript editor-xlsx
// How to compare two numbers in a spreadsheet.

// Use function to compare two numbers if it returns 1 they are equal else 0 in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.DELTA(23, 24));
```
