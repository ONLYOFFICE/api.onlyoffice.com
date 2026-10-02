# NORM_INV

Returns the inverse of the normal cumulative distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORM_INV(arg1, arg2, arg3);
```

`expression` - A variable that represents an [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A probability corresponding to the normal distribution, a number between 0 and 1 inclusive. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of the distribution, a positive number. |

## Returns

number

## Example

Calculate the inverse of the normal distribution for a given mean and standard deviation in a spreadsheet.

```javascript editor-xlsx
// How do I find the value for a probability in a normal distribution in a spreadsheet?

// Get the quantile value for a specific probability with custom mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let valueArr = [0.34, 7, 3];
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}
let probability = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();
let func = Api.WorksheetFunction;
let inv = func.NORM_INV(probability, mean, standardDeviation);
worksheet.GetRange("C1").SetValue(inv);
```
