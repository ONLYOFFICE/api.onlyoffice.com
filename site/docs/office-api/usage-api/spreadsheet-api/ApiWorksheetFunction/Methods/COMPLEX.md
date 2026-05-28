# COMPLEX

Converts real and imaginary coefficients into a complex number.

## Syntax

```javascript
expression.COMPLEX(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The real coefficient of the complex number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The imaginary coefficient of the complex number. |
| arg3 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | The suffix for the imaginary component of the complex number. It can be either "i" or "j" in lowercase. If it is omitted, the function will assume suffix to be "i". |

## Returns

number

## Example

Create a complex number from parts in a spreadsheet.

```javascript editor-xlsx
// What is a complex number made from two values in a spreadsheet?

// Combine regular and imaginary parts to build a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.COMPLEX(-2, 2.5, "i"));
```
