# ACOSH

Returns the inverse hyperbolic cosine of a number.

## Syntax

```javascript
expression.ACOSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number equal to or greater than 1. |

## Returns

number

## Example

Find the inverse hyperbolic cosine of a number in a spreadsheet.

```javascript editor-xlsx
// Apply the ACOSH function to get the inverse hyperbolic cosine in a spreadsheet.

// Store the calculated inverse hyperbolic cosine value in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOSH(3.25));
```
