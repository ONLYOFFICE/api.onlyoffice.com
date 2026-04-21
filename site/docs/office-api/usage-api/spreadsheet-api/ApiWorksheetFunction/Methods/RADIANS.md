# RADIANS

Converts degrees to radians.

## Syntax

```javascript
expression.RADIANS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An angle in degrees to convert. |

## Returns

number

## Example

Convert degrees to radians in a spreadsheet.

```javascript editor-xlsx
// How to get radians from degree in a spreadsheet.

// Use a function to convert degrees to radians in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RADIANS(90));
```
