# LOG10

Returns the base-10 logarithm of a number.

## Syntax

```javascript
expression.LOG10(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the base-10 logarithm will be returned. |

## Returns

number

## Example

Calculate the base-10 logarithm of a number in a spreadsheet.

```javascript editor-xlsx
// How do I find the logarithm with base 10 in a spreadsheet?

// Get the common logarithm value of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOG10(56));
```
