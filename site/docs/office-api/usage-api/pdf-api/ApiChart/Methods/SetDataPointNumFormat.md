# SetDataPointNumFormat

Sets the specified numeric format to the chart data point.

## Syntax

```javascript
expression.SetDataPointNumFormat(sFormat, nSeria, nDataPoint, bAllSeries);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sFormat | Required | [NumFormat](../../Enumeration/NumFormat.md) \| String |  | Numeric format (can be custom format). |
| nSeria | Required | Number |  | Series index. |
| nDataPoint | Required | number |  | The index of the data point in the specified chart series. |
| bAllSeries | Required | boolean |  | Specifies if the numeric format will be applied to the specified data point in all series. |

## Returns

boolean