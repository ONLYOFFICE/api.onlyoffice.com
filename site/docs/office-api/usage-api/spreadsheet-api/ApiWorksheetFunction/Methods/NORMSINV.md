# NORMSINV

Returns the inverse of the standard normal cumulative distribution (has a mean of zero and a standard deviation of one).

## Syntax

```javascript
expression.NORMSINV(arg1);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |

## Returns

number

## Example

Calculate the inverse of the standard normal distribution in a spreadsheet.

```javascript editor-xlsx
// How do I find the inverse of a standard normal distribution in a spreadsheet?

// Get the quantile value for a given probability in a standard normal distribution in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.25);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSINV(value);

worksheet.GetRange("C1").SetValue(ans);
```
