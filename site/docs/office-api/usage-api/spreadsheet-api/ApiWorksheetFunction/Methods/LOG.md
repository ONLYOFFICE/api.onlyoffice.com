# LOG

Returns the logarithm of a number to the specified base.

## Syntax

```javascript
expression.LOG(arg1, arg2);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the logarithm will be returned. |
| arg2 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The logarithm base. If omitted, it is equal to 10. |

## Returns

number

## Example

Calculate the logarithm of a number using a custom base in a spreadsheet.

```javascript editor-xlsx
// How do I find the logarithm with a base other than 10 or e in a spreadsheet?

// Get the logarithmic value of a number to any specified base in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG(56, 5));
```
