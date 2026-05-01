# SQRTPI

Returns the square root of (number * pi).

## Syntax

```javascript
expression.SQRTPI(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number by which pi is multiplied. |

## Returns

number

## Example

Return the square root of (number * pi) in a spreadsheet.

```javascript editor-xlsx
// How to calculate the square root of a number multiplied by aa constant Pi in a spreadsheet.

// Use a function to get the square root of (number * pi) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SQRTPI(5));
```
