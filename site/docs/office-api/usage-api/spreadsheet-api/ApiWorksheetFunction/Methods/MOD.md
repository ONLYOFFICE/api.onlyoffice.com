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

Get the remainder when one number is divided by another in a spreadsheet.

```javascript editor-xlsx
// What is the remainder from division in a spreadsheet?

// Calculate what is left over after dividing two numbers in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.MOD(65, 7));
```
