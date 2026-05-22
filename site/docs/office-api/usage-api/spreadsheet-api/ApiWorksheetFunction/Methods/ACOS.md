# ACOS

Returns the arccosine of a number, in radians in the range from 0 to Pi. The arccosine is the angle whose cosine is a number specified in the parameters.

## Syntax

```javascript
expression.ACOS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle cosine. It must be from -1 to 1. |

## Returns

number

## Example

Find the angle corresponding to a cosine value in a spreadsheet.

```javascript editor-xlsx
// How do I convert a cosine result back to its angle measurement in a spreadsheet?

// Determine the radian angle from a known cosine value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ACOS(0));
```
