# IMLOG10

Returns the base-10 logarithm of a complex number.

## Syntax

```javascript
expression.IMLOG10(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Calculate the base-10 logarithm of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the logarithm with base 10 of a complex number in a spreadsheet?

// Get the base-10 logarithmic result for complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMLOG10("-2+2.5i"));
```
