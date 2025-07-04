# LOGNORMDIST

Returns the cumulative lognormal distribution of x, where ln(x) is normally distributed with the specified parameters.

## Syntax

```javascript
expression.LOGNORMDIST(arg1, arg2, arg3);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The value at which to evaluate the function, a positive number. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The mean of ln(x). |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | The standard deviation of ln(x), a positive number. |

## Returns

number

## Example

This example shows how to return the cumulative lognormal distribution of x, where ln(x) is normally distributed with the specified parameters.

```javascript editor-xlsx
// How to get the cumulative lognormal distribution of x.

// Use a function to return the cumulative lognormal distribution.

const worksheet = Api.GetActiveSheet();

//configure function parameters
let numbersArr = [4, 7, 40];

//set values in cells
for (let i = 0; i < numbersArr.length; i++) {
  worksheet.GetRange("A" + (i + 1)).SetValue(numbersArr[i]);
}

//get parameters
let xValue = worksheet.GetRange("A1");
let mean = worksheet.GetRange("A2");
let standardDeviation = worksheet.GetRange("A3");

//invoke LOGNORMDIST method
let func = Api.GetWorksheetFunction();
let ans = func.LOGNORMDIST(xValue, mean, standardDeviation);

//print answer
worksheet.GetRange("C1").SetValue(ans);

```
