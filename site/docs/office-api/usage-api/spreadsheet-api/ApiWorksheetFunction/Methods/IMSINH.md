# IMSINH

Returns the hyperbolic sine of a complex number.

## Syntax

```javascript
expression.IMSINH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Calculate the hyperbolic sine of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the hyperbolic sine value of a complex number in a spreadsheet?

// Get the hyperbolic sine result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSINH("-2+2.5i"));
```
