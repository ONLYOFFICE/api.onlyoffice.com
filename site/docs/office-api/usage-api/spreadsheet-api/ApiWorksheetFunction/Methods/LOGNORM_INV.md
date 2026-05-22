# LOGNORM_INV

Returns the inverse of the lognormal cumulative distribution function of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

```javascript
expression.LOGNORM_INV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability associated with the lognormal distribution, a number between 0 and 1, inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The mean of ln(x). |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of ln(x), a positive number. |

## Returns

number

## Example

Find the value for a given cumulative probability in a lognormal distribution in a spreadsheet.

```javascript editor-xlsx
// How do I determine the percentile value for a lognormal distribution in a spreadsheet?

// Look up the inverse of cumulative lognormal probability in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let func = Api.WorksheetFunction;
worksheet.GetRange("A1").SetValue(func.LOGNORM_INV(0.3, 2, 0.2));
```
