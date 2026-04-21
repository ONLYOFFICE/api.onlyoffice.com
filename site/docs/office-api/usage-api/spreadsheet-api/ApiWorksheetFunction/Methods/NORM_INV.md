# NORM_INV

Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORM_INV(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of the distribution, a positive number. |

## Returns

number

## Example

Return the inverse of the normal cumulative distribution for the specified mean and standard deviation in a spreadsheet.

```javascript editor-xlsx
// How to calculate the inverse of the normal cumulative distribution in a spreadsheet.

// Use a function to get the inverse of the normal cumulative distribution with a mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue(0.6);

//method params
let value = worksheet.GetRange("A1").GetValue();

let func = Api.WorksheetFunction;
let ans = func.NORMSDIST(value);

worksheet.GetRange("C1").SetValue(ans);
```
