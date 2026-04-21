# ISREF

Checks whether a value is a reference, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISREF(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

Check whether a value is a reference, and return true or false in a spreadsheet.

```javascript editor-xlsx
// How to know whether a value is a reference in a spreadsheet.

// Use a function to find out whether a value is a reference in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISREF("A3"));
worksheet.GetRange("A2").SetValue(func.ISREF(worksheet.GetRange("A3")));
```
