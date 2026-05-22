# IMARGUMENT

Returns the argument Theta, an angle expressed in radians.

## Syntax

```javascript
expression.IMARGUMENT(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Get the angle of a complex number in radians in a spreadsheet.

```javascript editor-xlsx
// How do I find the argument of a complex number in a spreadsheet?

// Calculate the phase angle of a complex number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMARGUMENT("-2+2.5i"));
```
