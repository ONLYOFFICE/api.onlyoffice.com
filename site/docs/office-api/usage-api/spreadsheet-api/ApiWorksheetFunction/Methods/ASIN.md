# ASIN

Returns the arcsine of a number in radians, in the range from *-Pi/2* to *Pi/2*.

## Syntax

```javascript
expression.ASIN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The angle sine. It must be from -1 to 1. |

## Returns

number

## Example

Calculate the arcsine of a number and return the result in radians in a spreadsheet.

```javascript editor-xlsx
// Find the inverse sine using the ASIN function in a spreadsheet.

// Determine the angle value from a sine number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));
```
