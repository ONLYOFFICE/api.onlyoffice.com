# ISFORMULA

Checks whether a reference to a cell contains a formula, and returns - **true** or - **false**.

## Syntax

```javascript
expression.ISFORMULA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A cell range to test. This argument can be a range or a range name. |

## Returns

boolean

## Example

Detect whether a cell contains a formula in a spreadsheet.

```javascript editor-xlsx
// How do I find out if a cell has a formula in a spreadsheet?

// Use a function to identify cells with formulas versus static values in a spreadsheet.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.WorksheetFunction;
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
