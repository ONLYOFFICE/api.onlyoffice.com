# IMDIV

Returns the quotient of two complex numbers.

## Syntax

```javascript
expression.IMDIV(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The complex numerator or dividend in the *x + yi* or *x + yj* form. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The complex denominator or divisor in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Divide one complex number by another in a spreadsheet.

```javascript editor-xlsx
// How do I divide two complex numbers in a spreadsheet?

// Get the quotient of complex numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMDIV("-2+2.5i", "0.1+1.5j"));
```
