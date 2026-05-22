# IMABS

Returns the absolute value (modulus) of a complex number.

## Syntax

```javascript
expression.IMABS(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Get the absolute value of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I find the magnitude of a complex number in a spreadsheet?

// Calculate the modulus of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMABS("-2+2.5i"));
```
