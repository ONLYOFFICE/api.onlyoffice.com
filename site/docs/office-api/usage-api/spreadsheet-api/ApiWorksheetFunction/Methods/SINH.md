# SINH

Returns the hyperbolic sine of a number.

## Syntax

```javascript
expression.SINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic sine will be returned. |

## Returns

number

## Example

Return the hyperbolic sine of a number in a spreadsheet.

```javascript editor-xlsx
// How to calaculate the hyperbolic sine of a number in a spreadsheet.

// Use a function to get a hyperbolic sine of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));
```
