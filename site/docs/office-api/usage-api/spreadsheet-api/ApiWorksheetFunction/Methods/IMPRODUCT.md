# IMPRODUCT

Returns the product of the specified complex numbers.

## Syntax

```javascript
expression.IMPRODUCT(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Up to 255 complex numbers expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Calculate the product of multiple complex numbers in a spreadsheet.

```javascript editor-xlsx
// How do I multiply complex numbers together in a spreadsheet?

// Get the multiplication result of complex number operations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPRODUCT("-2+2.5i", "0.1+1.5j", "1+3i"));
```
