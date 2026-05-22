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
// Calculate the hyperbolic sine value using the SINH function.

// Apply the function to compute and display the result in a cell.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.SINH(4));
```
