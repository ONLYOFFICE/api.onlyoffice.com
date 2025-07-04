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

This example shows how to return the arccosine of a number, in radians in the range from 0 to Pi. The arccosine is the angle whose cosine is a number specified in the parameters.

```javascript editor-xlsx
// How to get an arccosine of a number and display it in the worksheet.

// Get a function that gets arccosine of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.ACOS(0));
```
