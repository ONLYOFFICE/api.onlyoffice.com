# SetMarkerOutLine

Sets the outline to the marker in the specified chart series.

## Syntax

```javascript
expression.SetMarkerOutLine(oStroke, nSeries, nMarker, bAllMarkers);
```

`expression` - A variable that represents a [ApiChart](../ApiChart.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | Required | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | The stroke used to create the marker outline. |
| nSeries | Required | number |  | The index of the chart series. |
| nMarker | Required | number |  | The index of the marker in the specified chart series. |
| bAllMarkers | Optional | boolean | false | Specifies if the outline will be applied to all markers in the specified chart series. |

## Returns

boolean