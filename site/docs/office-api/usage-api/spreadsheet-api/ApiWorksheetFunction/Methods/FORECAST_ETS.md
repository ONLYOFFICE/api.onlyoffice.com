# FORECAST_ETS

Сalculates or predicts a future value based on existing (historical) values by using the AAA version of the Exponential Smoothing (ETS) algorithm.

## Syntax

```javascript
expression.FORECAST_ETS(arg1, arg2, arg3, arg4, arg5, arg6);
```

`expression` - A variable that represents a [ApiWorksheetFunction](../ApiWorksheetFunction.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| arg1 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | A date for which a new value will be predicted. Must be after the last date in the timeline. |
| arg2 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number[] |  | A range or an array of numeric data that determines the historical values for which a new point will be predicted. |
| arg3 | Required | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) |  | A range of date/time values that correspond to the historical values. The timeline range must be of the same size as the second argument. Date/time values must have a constant step between them and can't be zero. |
| arg4 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional numeric value that specifies the length of the seasonal pattern. The default value of 1 indicates seasonality is detected automatically. The 0 value means no seasonality. |
| arg5 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional numeric value to handle missing values. The default value of 1 replaces missing values by interpolation, and 0 replaces them with zeros. |
| arg6 | Optional | [ApiRange](../../ApiRange/ApiRange.md) \| [ApiName](../../ApiName/ApiName.md) \| number |  | An optional numeric value to aggregate multiple values with the same time stamp. |

## Returns

number

## Example

This example shows how to calculate or predict a future value based on existing (historical) values by using the AAA version of the Exponential Smoothing (ETS) algorithm.

```javascript editor-xlsx
// How to calculate or predict a future value based on existing (historical) values.

// Use an AAA version of the Exponential Smoothing (ETS) algorithm to calculate or predict a future value based on existing values.

let worksheet = Api.GetActiveSheet();
let func = Api.GetWorksheetFunction();
let dates = ["10/1/2017", "11/1/2017", "12/1/2017", "1/1/2018", "2/1/2018", "3/1/2018"];
let numbers = [12558, 14356, 16345, 18678, 14227];

for (let i = 0; i < dates.length; i++) {
    worksheet.GetRange("A" + (i + 1)).SetValue(dates[i]);
}
for (let j = 0; j < numbers.length; j++) {
    worksheet.GetRange("B" + (j + 1)).SetValue(numbers[j]);
}

worksheet.GetRange("A1").SetColumnWidth(15);
let range1 = worksheet.GetRange("B1:B5");
let range2 = worksheet.GetRange("A1:A5");
worksheet.GetRange("B6").SetValue(func.FORECAST_ETS("3/1/2018", range1, range2, 0, 1, 1));
```
