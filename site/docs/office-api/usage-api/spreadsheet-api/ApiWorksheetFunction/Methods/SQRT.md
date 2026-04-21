# SQRT

Returns the square root of a number.

## Syntax

```javascript
expression.SQRT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the square root will be returned. |

## Returns

number

## Example

Return the square root of a number in a spreadsheet.

```javascript editor-xlsx
// How to calculate the square root of a number in a spreadsheet.

// Use a function to get the square root of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRT(100));
```
