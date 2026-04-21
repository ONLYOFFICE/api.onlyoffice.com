# IMSUM

Returns the sum of the specified complex numbers.

## Syntax

```javascript
expression.IMSUM(args);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| args | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| string |  | Up to 255 complex numbers expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Return the sum of two complex numbers expressed in the x + yi or x + yj form in a spreadsheet.

```javascript editor-xlsx
// How to add two complex numbers in a spreadsheet.

// Use a function to get the sum of two complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMSUM("1+3i", "0.1+1.5j", "-2+2.5i"));
```
