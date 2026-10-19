# ChartTypeLegacy

This type specifies the legacy chart type names which are kept for backward compatibility.

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

Create the "bar3D" chart using a legacy chart type name.

```javascript editor-xlsx
// Specify the "ChartType" property of the ApiChart object using a legacy chart type name.

// The resulting chart will have a "bar3D" type.

var chart = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
```
