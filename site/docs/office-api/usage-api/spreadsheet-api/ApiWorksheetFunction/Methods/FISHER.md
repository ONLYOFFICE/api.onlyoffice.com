# FISHER

Returns the Fisher transformation.

## Syntax

```javascript
expression.FISHER(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for the transformation, a number between -1 and 1, excluding -1 and 1. |

## Returns

number

## Example

Apply the Fisher transformation to a correlation value in a spreadsheet.

```javascript editor-xlsx
// How do I transform a correlation coefficient for analysis in a spreadsheet?

// Convert a correlation value into its Fisher transformation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.FISHER(0.56);
worksheet.GetRange("B2").SetValue(ans);
```
