# AVERAGEA

Returns the average (arithmetic mean) of the specified arguments, evaluating text and -**false** in arguments as 0; -**true** evaluates as 1.

## Syntax

```javascript
expression.AVERAGEA(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number \| string \| number[] |  | Up to 255 numeric values for which the average value will be returned. The first argument is required, subsequent arguments are optional. Arguments can be numbers, text, or logical values, such as **true** and **false**, names, or arrays of numbers. |

## Returns

number

## Example

Return the average (arithmetic mean) of the specified arguments in a spreadsheet.

```javascript editor-xlsx
// How to find an average (arithmetic mean) in a spreadsheet.

// Use function to get the find an average (arithmetic mean) in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
let ans = func.AVERAGEA(78, 98, 46, 123, 45, true, false);
worksheet.GetRange("B2").SetValue(ans);
```
