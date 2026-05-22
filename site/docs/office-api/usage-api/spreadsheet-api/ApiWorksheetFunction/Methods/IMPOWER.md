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

Raise a complex number to a specified power in a spreadsheet.

```javascript editor-xlsx
// How do I calculate a complex number raised to an integer power in a spreadsheet?

// Get the exponential result of complex number calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.IMPOWER("-2+2.5i", -3));
```
