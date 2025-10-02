# IMSUB

Returns the difference of two complex numbers expressed in the *x + yi* or *x + yj* form.

## Syntax

```javascript
expression.IMSUB(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The complex number from which to subtract the second number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The complex number to subtract from the first number. |

## Returns

number

## Example

This example shows how to return the difference of two complex numbers expressed in the x + yi or x + yj form.

```javascript editor-xlsx
// How to substract two complex numbers.

// Use a function to get the difference of two complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
worksheet.GetRange("A1").SetValue(func.IMSUB("1+3i", "-2+2.5i"));
```
