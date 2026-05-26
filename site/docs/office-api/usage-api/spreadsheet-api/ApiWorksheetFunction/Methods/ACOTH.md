# ACOTH

Returns the inverse hyperbolic cotangent of a number.

## Syntax

```javascript
expression.ACOTH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle hyperbolic cotangent. It must be less than -1 or greater than 1. |

## Returns

number

## Example

Calculate the inverse hyperbolic cotangent of a number in a spreadsheet.

```javascript editor-xlsx
// Compute the ACOTH value for mathematical analysis in a spreadsheet.

// Output the inverse hyperbolic cotangent to a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOTH(3));
```
