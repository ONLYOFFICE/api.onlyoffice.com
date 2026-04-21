# IMEXP

Returns the exponential of a complex number.

## Syntax

```javascript
expression.IMEXP(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Return the exponential of a complex number in a spreadsheet.

```javascript editor-xlsx
// How to get the exponential of a comlex numbers in a spreadsheet.

// Use a function to get the exponential in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMEXP("-2+2.5i"));
```
