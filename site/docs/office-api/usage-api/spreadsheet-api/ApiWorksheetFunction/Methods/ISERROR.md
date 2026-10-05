# ISERROR

Checks whether a value is an error, and returns **true** or **false**.

## Syntax

```javascript
expression.ISERROR(arg1);
```

`expression` - A variable that represents an [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | number \| string \| boolean \| [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

Check if a value is any type of error in a spreadsheet.

```javascript editor-xlsx
// How do I determine if a cell contains an error in a spreadsheet?

// Test whether a value is an error result in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISERROR("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISERROR("#DIV/0!"));
worksheet.GetRange("A3").SetValue(func.ISERROR(255));
```
