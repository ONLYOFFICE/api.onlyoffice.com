# NORM_DIST

Returns the normal distribution for the specified mean and standard deviation.

## Syntax

```javascript
expression.NORM_DIST(arg1, arg2, arg3, arg4);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value for which the distribution will be returned. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The arithmetic mean of the distribution. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of the distribution, a positive number. |
| arg4 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| boolean |  | A logical value (**true** or **false**) that determines the function form. If it is **true**, the function returns the cumulative distribution function. If it is **false**, the function returns the probability mass function. |

## Returns

number

## Example

Calculate the normal distribution for a value given its mean and standard deviation in a spreadsheet.

```javascript editor-xlsx
// How do I compute the normal distribution in a spreadsheet?

// Find the probability of a value in a normal distribution with specific mean and standard deviation in a spreadsheet.

const worksheet = Api.GetActiveSheet();
let valueArr = [36, 6, 7, false];

// Place the numbers in cells
for (let i = 0; i < valueArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(valueArr[i]);
}

//method params
let x = worksheet.GetRange("A1").GetValue();
let mean = worksheet.GetRange("A2").GetValue();
let standardDeviation = worksheet.GetRange("A3").GetValue();
let cumulative = worksheet.GetRange("A4").GetValue();
let func = Api.WorksheetFunction;
let normalDist = func.NORM_DIST(x, mean, standardDeviation, cumulative);
worksheet.GetRange("C1").SetValue(normalDist);
```
