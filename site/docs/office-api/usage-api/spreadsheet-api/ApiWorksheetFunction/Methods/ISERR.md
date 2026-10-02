# ISERR

Checks whether a value is an error other than *#N/A*, and returns **true** or **false**.

## Syntax

```javascript
expression.ISERR(arg1);
```

`expression` - A variable that represents an [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

Check if a value is an error other than N/A in a spreadsheet.

```javascript editor-xlsx
// How do I detect if a cell contains an error in a spreadsheet?

// Identify errors in cells while excluding N/A values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISERR("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISERR("#DIV/0!"));
worksheet.GetRange("A3").SetValue(func.ISERR(255));
```
