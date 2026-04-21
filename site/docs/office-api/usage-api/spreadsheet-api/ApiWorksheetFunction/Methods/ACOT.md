# ACOT

Returns the arccotangent of a number, in radians in the range from 0 to Pi.

## Syntax

```javascript
expression.ACOT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle cotangent. |

## Returns

number

## Example

Return the arccotangent of a number, in radians in the range from 0 to Pi in a spreadsheet.

```javascript editor-xlsx
// How to get an arccotangent of a number and display it in the worksheet.

// Get a function that gets arccotangent of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOT(0));
```
