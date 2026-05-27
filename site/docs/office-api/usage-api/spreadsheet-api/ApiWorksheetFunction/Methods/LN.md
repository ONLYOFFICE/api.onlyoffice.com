# LN

Returns the natural logarithm of a number.

## Syntax

```javascript
expression.LN(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The positive real number for which the natural logarithm will be returned. |

## Returns

number

## Example

Calculate the natural logarithm of a number in a spreadsheet.

```javascript editor-xlsx
// How do I find the natural logarithm (base e) of a value in a spreadsheet?

// Get the inverse exponential of a number in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LN(23));
```
