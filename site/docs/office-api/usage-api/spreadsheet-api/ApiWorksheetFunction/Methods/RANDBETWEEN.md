# RANDBETWEEN

Returns a random number between the numbers specified.

## Syntax

```javascript
expression.RANDBETWEEN(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The smallest integer value. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The largest integer value. |

## Returns

number

## Example

Generate a random whole number within a specified range in a spreadsheet.

```javascript editor-xlsx
// How do I pick a random value between two numbers in a spreadsheet?

// Create an unpredictable integer within a minimum and maximum in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.RANDBETWEEN(-1, 10));
```
