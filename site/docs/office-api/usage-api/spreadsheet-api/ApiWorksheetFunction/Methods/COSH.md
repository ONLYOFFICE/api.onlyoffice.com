# COSH

Returns the hyperbolic cosine of a number.

## Syntax

```javascript
expression.COSH(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | Any real number for which the hyperbolic cosine will be returned. |

## Returns

number

## Example

Get the hyperbolic cosine of a number in a spreadsheet.

```javascript editor-xlsx
// How to find a hyperbolic cosine in a spreadsheet.

// Use function to get the hyperbolic cosine of an angle in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COSH(3));
```
