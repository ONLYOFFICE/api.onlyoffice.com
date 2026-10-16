# ChartTypeLegacy

此类型指定为向后兼容而保留的旧版图表类型名称。

## 类型

枚举

## 值

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

## 示例

使用旧版图表类型名称创建 "bar3D" 图表。

```javascript editor-docx
// Specify the "ChartType" property of the ApiChart object using a legacy chart type name.

// The resulting chart will have a "bar3D" type.

var chart = Api.CreateChart("bar3D", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
```
