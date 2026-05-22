# ApiChart

ApiChart 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddSeria](./Methods/AddSeria.md) | 无 | 向当前图表添加新系列。 |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | 通过样式 ID 为当前图表设置样式。 |
| [Copy](./Methods/Copy.md) | [ApiChart](../ApiChart/ApiChart.md) | 创建指定图表的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 删除指定的绘图对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | 返回图表空间中的所有系列。 |
| [GetChartType](./Methods/GetChartType.md) | [ChartType](../Enumeration/ChartType.md) | 返回图表对象的类型。 |
| [GetClassType](./Methods/GetClassType.md) | "chart" | 返回 ApiChart 类的类型。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | 返回当前绘图的父工作表。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) | 返回具有特定索引的系列。 |
| [GetTitle](./Methods/GetTitle.md) | string \| null | 返回图表标题文本。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | 从当前图表中删除指定的系列。 |
| [Select](./Methods/Select.md) | 无 | 选择当前图形对象。 |
| [SetAxieNumFormat](./Methods/SetAxieNumFormat.md) | boolean | 将指定的数字格式设置为坐标轴值。 |
| [SetCatFormula](./Methods/SetCatFormula.md) | 无 | 设置当前图表的类别值范围。 |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | 设置指定图表系列中数据点的填充。 |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | 设置指定图表系列中数据点的轮廓。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetHorAxisLabelsFontSize](./Methods/SetHorAxisLabelsFontSize.md) | boolean | 指定横轴标签的字体大小。 |
| [SetHorAxisMajorTickMark](./Methods/SetHorAxisMajorTickMark.md) | boolean | 指定横轴的主刻度线。 |
| [SetHorAxisMinorTickMark](./Methods/SetHorAxisMinorTickMark.md) | boolean | 指定横轴的次刻度线。 |
| [SetHorAxisOrientation](./Methods/SetHorAxisOrientation.md) | boolean | 指定横轴的方向。 |
| [SetHorAxisTickLabelPosition](./Methods/SetHorAxisTickLabelPosition.md) | boolean | 指定横轴刻度标签的位置。 |
| [SetHorAxisTitle](./Methods/SetHorAxisTitle.md) | boolean | 指定图表横轴的标题。 |
| [SetLegendFill](./Methods/SetLegendFill.md) | boolean | 设置图表图例的填充。 |
| [SetLegendFontSize](./Methods/SetLegendFontSize.md) | boolean | 指定图例的字体大小。 |
| [SetLegendOutLine](./Methods/SetLegendOutLine.md) | boolean | 设置图表图例的轮廓。 |
| [SetLegendPos](./Methods/SetLegendPos.md) | boolean | 指定图表图例的位置。 |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | 设置当前绘图的指定锁定类型的锁定值。 |
| [SetMajorHorizontalGridlines](./Methods/SetMajorHorizontalGridlines.md) | boolean | 指定主要水平网格线的视觉属性。 |
| [SetMajorVerticalGridlines](./Methods/SetMajorVerticalGridlines.md) | boolean | 指定主要垂直网格线的视觉属性。 |
| [SetMarkerFill](./Methods/SetMarkerFill.md) | boolean | 设置指定图表系列中标记的填充。 |
| [SetMarkerOutLine](./Methods/SetMarkerOutLine.md) | boolean | 设置指定图表系列中标记的轮廓。 |
| [SetMinorHorizontalGridlines](./Methods/SetMinorHorizontalGridlines.md) | boolean | 指定次要水平网格线的视觉属性。 |
| [SetMinorVerticalGridlines](./Methods/SetMinorVerticalGridlines.md) | boolean | 指定次要垂直网格线的视觉属性。 |
| [SetName](./Methods/SetName.md) | boolean | 设置当前绘图的名称。 |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | 设置指定图形对象的轮廓属性。 |
| [SetPlotAreaFill](./Methods/SetPlotAreaFill.md) | boolean | 设置图表绘图区域的填充。 |
| [SetPlotAreaOutLine](./Methods/SetPlotAreaOutLine.md) | boolean | 设置图表绘图区域的轮廓。 |
| [SetPosition](./Methods/SetPosition.md) | 无 | 更改绘图对象的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSeriaName](./Methods/SetSeriaName.md) | boolean | 设置指定系列的名称。 |
| [SetSeriaValues](./Methods/SetSeriaValues.md) | boolean | 将指定范围的值设置到指定系列。 |
| [SetSeriaXValues](./Methods/SetSeriaXValues.md) | boolean | 将指定范围的 X 轴值设置到指定系列。仅用于散点图。 |
| [SetSeriesFill](./Methods/SetSeriesFill.md) | boolean | 设置指定图表系列的填充。 |
| [SetSeriesOutLine](./Methods/SetSeriesOutLine.md) | boolean | 设置指定图表系列的轮廓。 |
| [SetShowDataLabels](./Methods/SetShowDataLabels.md) | boolean | 指定为图表显示哪些图表数据标签。 |
| [SetShowPointDataLabel](./Methods/SetShowPointDataLabel.md) | boolean | 指定数据标签的显示选项。 |
| [SetSize](./Methods/SetSize.md) | 无 | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetTitle](./Methods/SetTitle.md) | boolean | 指定图表标题。 |
| [SetTitleFill](./Methods/SetTitleFill.md) | boolean | 设置图表标题的填充。 |
| [SetTitleOutLine](./Methods/SetTitleOutLine.md) | boolean | 设置图表标题的轮廓。 |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | 指定纵轴的方向。 |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | 指定图表纵轴的标题。 |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | 指定纵轴标签的字体大小。 |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | 指定纵轴的主刻度线。 |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | 指定纵轴的次刻度线。 |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | 指定纵轴刻度标签的位置。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前绘图。 |
