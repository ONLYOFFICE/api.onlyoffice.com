# SetDataPointOutLine

Sets the outline to the data point in the specified chart series.

## Syntax

```javascript
expression.SetDataPointOutLine(oStroke, nSeries, nDataPoint, bAllSeries);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the data point outline. |
| nSeries | Required | number |  | The index of the chart series. |
| nDataPoint | Required | number |  | The index of the data point in the specified chart series. |
| bAllSeries | Required | boolean |  | Specifies if the outline will be applied to the specified data point in all series. |

## Returns

boolean