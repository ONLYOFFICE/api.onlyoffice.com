# POISSON

Returns the Poisson distribution.

## Syntax

```javascript
expression.POISSON(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The number of events. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The expected numeric value, a positive number. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value (**true** or **false**) that determines the function form. |

## Returns

number

## Example

Calculate the probability using the Poisson distribution model in a spreadsheet.

```javascript editor-xlsx
// How do I use the Poisson distribution to find event probabilities in a spreadsheet?

// Get the likelihood of a certain number of events occurring in a fixed timeframe in a spreadsheet.

const worksheet = Api.GetActiveSheet();

//method params
let x = 9;
let mean = 12;
let cumulative = false;

let func = Api.WorksheetFunction;
let ans = func.POISSON(x, mean, cumulative);

worksheet.GetRange("C1").SetValue(ans);
```
