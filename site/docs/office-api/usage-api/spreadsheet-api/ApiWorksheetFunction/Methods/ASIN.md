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

This example shows how to return the arcsine of a number in radians, in the range from Pi/2 to Pi/2.

```javascript editor-xlsx
// How to get an arcsine of a number in radians.

// Use function to get an arcsine of a number and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.ASIN(0.25));
```
