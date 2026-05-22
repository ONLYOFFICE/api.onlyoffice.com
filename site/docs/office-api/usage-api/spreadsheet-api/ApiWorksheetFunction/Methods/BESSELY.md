# BESSELY

Returns the Bessel function Yn(x).

## Syntax

```javascript
expression.BESSELY(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The order of the function. |

## Returns

number

## Example

Evaluate the Bessel function of the second kind in a spreadsheet.

```javascript editor-xlsx
// How do I find the Bessel Y function result for signal analysis in a spreadsheet?

// Use mathematical modeling for vibration and resonance calculations in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.BESSELY(2.5, 1));
```
