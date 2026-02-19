# ISNA

Checks whether a value is *#N/A*, and returns -**true** or -**false**.

## Syntax

```javascript
expression.ISNA(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| string \| number \| boolean \| [ApiName](../../ApiName/ApiName.md) |  | The value to test. The value can be an empty cell, error, logical value, text, number, range, or range name. |

## Returns

boolean

## Example

This example shows how to check whether a value is N/A, and returns true or false.

```javascript editor-xlsx
// How to check if the cell contains N/A value.

// Use a function to check whether a range data is an N/A value.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ISNA("#N/A"));
worksheet.GetRange("A2").SetValue(func.ISNA(255));
worksheet.GetRange("A3").SetValue(func.ISNA("www.example.com"));
```
