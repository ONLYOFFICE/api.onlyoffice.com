# ChartType

此类型指定可用于创建新图表的可用图表类型。

## 类型

枚举

## 值

- "ColumnClustered"
- "ColumnStacked"
- "ColumnStacked100"
- "3DColumnClustered"
- "3DColumnStacked"
- "3DColumnStacked100"
- "3DColumn"
- "BarClustered"
- "BarStacked"
- "BarStacked100"
- "3DBarClustered"
- "3DBarStacked"
- "3DBarStacked100"
- "Line"
- "LineStacked"
- "LineStacked100"
- "LineMarkers"
- "LineMarkersStacked"
- "LineMarkersStacked100"
- "3DLine"
- "Pie"
- "3DPie"
- "Doughnut"
- "XYScatter"
- "XYScatterLines"
- "XYScatterLinesNoMarkers"
- "XYScatterSmooth"
- "XYScatterSmoothNoMarkers"
- "StockHLC"
- "StockOHLC"
- "StockVHLC"
- "StockVOHLC"
- "Area"
- "AreaStacked"
- "AreaStacked100"
- "Combo"
- "ComboColumnClusteredLine"
- "ComboColumnClusteredLineSecondaryAxis"
- "Radar"
- "RadarMarkers"
- "RadarFilled"
- "unknown"

## 示例

创建 “3DColumnClustered” 图表。

```javascript editor-docx
// Specify the "ChartType" property of the ApiChart object.

// The resulting chart will have a "3DColumnClustered" type.

var chart = Api.CreateChart("3DColumnClustered", [[200, 240, 280],[250, 260, 280]], ["Projected Revenue", "Estimated Costs"], [2014, 2015, 2016], 4051300, 2347595, 24);
```
