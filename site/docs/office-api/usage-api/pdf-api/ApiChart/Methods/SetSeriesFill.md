# SetSeriesFill

Sets the fill to the specified chart series.

## Syntax

```javascript
expression.SetSeriesFill(oFill, nSeries, bAll);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | Required | [ApiFill](../../ApiFill/ApiFill.md) |  | The fill type used to fill the series. |
| nSeries | Required | number |  | The index of the chart series. |
| bAll | Optional | boolean | false | Specifies if the fill will be applied to all series. |

## Returns

boolean