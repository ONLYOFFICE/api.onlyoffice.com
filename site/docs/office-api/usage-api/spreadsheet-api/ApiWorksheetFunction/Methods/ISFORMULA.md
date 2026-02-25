# ISFORMULA

Checks whether a reference to a cell contains a formula, and returns -**true** or -**false**.

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

This example shows how to check whether a reference to a cell contains a formula, and returns true or false.

```javascript editor-xlsx playground
// How to check if the cell contains formula or not.

// Use a function to check whether a range data is a formula or not.

const worksheet = Api.GetActiveSheet();

// Set the formula in cell B3
worksheet.GetRange("B3").SetValue("=SUM(5, 6)");

// Check if there is a formula in C3
let func = Api.WorksheetFunction;
let result = func.ISFORMULA(worksheet.GetRange("B3"));
worksheet.GetRange("C3").SetValue(result);
```
