# IMSECH

Returns the hyperbolic secant of a complex number.

## Syntax

```javascript
expression.IMSECH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

This example shows how to return the hyperbolic secant of a complex number.

```javascript editor-xlsx
// How to get the hyperbolic secant.

// Use a function to get the hyperbolic secant of a complex number.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSECH("-2+2.5i"));
```
