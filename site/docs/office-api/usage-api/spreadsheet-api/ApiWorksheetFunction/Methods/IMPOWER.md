# IMPOWER

Returns a complex number raised to an integer power.

## Syntax

```javascript
expression.IMPOWER(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A complex number expressed in the *x + yi* or *x + yj* form. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The power to which the complex number will be raised. |

## Returns

number

## Example

Return a complex number raised to an integer power in a spreadsheet.

```javascript editor-xlsx
// How to get the result from raising into power of a complex number in a spreadsheet.

// Use a function to get the result from the power in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));
```
