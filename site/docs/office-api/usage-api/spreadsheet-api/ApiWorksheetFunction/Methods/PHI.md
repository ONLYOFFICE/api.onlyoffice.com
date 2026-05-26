# PHI

Returns the value of the density function for a standard normal distribution.

## Syntax

```javascript
expression.PHI(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number for which the density of the standard normal distribution will be returned. |

## Returns

number

## Example

Calculate the height of a normal distribution curve at a specific point in a spreadsheet.

```javascript editor-xlsx
// How do I get the probability density value for a standard normal distribution in a spreadsheet?

// Find how likely a value is within a bell curve distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let number = 5;

worksheet.GetRange("A1").SetValue(number);

let func = Api.WorksheetFunction;
let ans = func.PHI(number);

worksheet.GetRange("C1").SetValue(ans);
```
