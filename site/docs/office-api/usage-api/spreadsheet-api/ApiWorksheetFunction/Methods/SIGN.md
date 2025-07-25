# SIGN

Returns the sign of a number: -**1** if the number is positive, -**0** if the number is zero, or -**-1** if the number is negative.

## Syntax

```javascript
expression.SIGN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number. |

## Returns

number

## Example

This example shows how to return the sign of a number: 1 if the number is positive, 0 if the number is zero, or -1 if the number is negative.

```javascript editor-xlsx
// How to find out whether a number is positive or negative.

// Use a function to get a sign of a number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.SIGN(12));
```
