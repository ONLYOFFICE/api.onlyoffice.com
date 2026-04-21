# ChartType

This type specifies the available chart types which can be used to create a new chart.

## Type

Enumeration

## Values

- "bar"
- "barStacked"
- "barStackedPercent"
- "bar3D"
- "barStacked3D"
- "barStackedPercent3D"
- "barStackedPercent3DPerspective"
- "horizontalBar"
- "horizontalBarStacked"
- "horizontalBarStackedPercent"
- "horizontalBar3D"
- "horizontalBarStacked3D"
- "horizontalBarStackedPercent3D"
- "lineNormal"
- "lineStacked"
- "lineStackedPercent"
- "lineNormalMarker"
- "lineStackedMarker"
- "lineStackedPerMarker"
- "line3D"
- "pie"
- "pie3D"
- "doughnut"
- "scatter"
- "scatterLine"
- "scatterLineMarker"
- "scatterSmooth"
- "scatterSmoothMarker"
- "stock"
- "area"
- "areaStacked"
- "areaStackedPercent"
- "comboCustom"
- "comboBarLine"
- "comboBarLineSecondary"
- "radar"
- "radarMarker"
- "radarFilled"
- "unknown"

## Example

Create the "bar3D" chart.

```javascript editor-xlsx
// Specify the "ChartType" property of the ApiChart object.

// The resulting chart will have a "bar3D" type.

var chart = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
```
