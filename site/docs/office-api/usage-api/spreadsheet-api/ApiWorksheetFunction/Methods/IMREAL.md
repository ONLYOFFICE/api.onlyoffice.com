# IMREAL

Returns the real coefficient of a complex number.

## Syntax

```javascript
expression.IMREAL(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |

## Returns

number

## Example

Extract the real part of a complex number in a spreadsheet.

```javascript editor-xlsx
// How do I get the real coefficient from a complex number in a spreadsheet?

// Retrieve the real component for complex number analysis in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMREAL("-2+2.5i"));
```
