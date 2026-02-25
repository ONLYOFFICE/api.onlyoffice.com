# IMAGINARY

Returns the imaginary coefficient of a complex number.

## Syntax

```javascript
expression.IMAGINARY(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

This example shows how to return the imaginary coefficient of a complex number.

```javascript editor-xlsx playground
// How to get the imaginary part of the complex number.

// Use a function to get an imaginary coefficient of the complex number. 

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMAGINARY("-2+2.5i"));
```
