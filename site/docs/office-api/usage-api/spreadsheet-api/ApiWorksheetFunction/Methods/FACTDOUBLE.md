# FACTDOUBLE

Returns the double factorial of a number.

## Syntax

```javascript
expression.FACTDOUBLE(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which to return the double factorial. |

## Returns

number

## Example

Return the double factorial of a number in a spreadsheet.

```javascript editor-xlsx
// Calculate the double factorial of a number.

// Apply FACTDOUBLE function to get the double factorial value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.FACTDOUBLE(123));
```
