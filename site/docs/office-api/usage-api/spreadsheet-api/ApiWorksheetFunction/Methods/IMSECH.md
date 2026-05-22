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

Calculate the hyperbolic secant of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the hyperbolic secant value of a complex number in a spreadsheet?

// Get the hyperbolic secant result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSECH("-2+2.5i"));
```
