# IMCOSH

Returns the hyperbolic cosine of a complex number.

## Syntax

```javascript
expression.IMCOSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Get the hyperbolic cosine of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the hyperbolic cosine in a spreadsheet?

// Calculate the hyperbolic cosine function for a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMCOSH("-2+2.5i"));
```
