# NORMSDIST

Returns the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

## Syntax

```javascript
expression.NORMSDIST(arg1);
```

`expression` - A variable that represents an [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the distribution will be returned. |

## Returns

number

## Example

Calculate standard normal distribution probability in a spreadsheet.

```javascript editor-xlsx
// Find cumulative probability using the standard normal curve in a spreadsheet.

// Determine statistical likelihood for standardized values in a spreadsheet.

const worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(0.6);
let value = worksheet.GetRange("A1").GetValue();
let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);
worksheet.GetRange("C1").SetValue(ans);
```
