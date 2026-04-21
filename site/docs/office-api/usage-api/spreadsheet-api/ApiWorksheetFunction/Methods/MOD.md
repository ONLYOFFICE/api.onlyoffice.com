# MOD

Returns the remainder after a number is divided by a divisor.

## Syntax

```javascript
expression.MOD(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to divide and find the remainder. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number to divide by. |

## Returns

number

## Example

Return the remainder after a number is divided by a divisor in a spreadsheet.

```javascript editor-xlsx
// How to get the modulo from the division in a spreadsheet.

// Use a function to calculate the remainder from the division operation in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MOD(65, 7));
```
