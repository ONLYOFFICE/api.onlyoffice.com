# IMSQRT

Returns the square root of a complex number.

## Syntax

```javascript
expression.IMSQRT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Calculate the square root of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the square root of a complex number in a spreadsheet?

// Get the square root result for complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSQRT("-2+2.5i"));
```
