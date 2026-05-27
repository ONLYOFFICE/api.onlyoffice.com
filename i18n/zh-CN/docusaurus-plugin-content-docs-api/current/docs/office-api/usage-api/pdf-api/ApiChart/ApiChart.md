# ApiChart

ApiChart 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | 通过样式 ID 为当前图表设置样式。 |
| [Copy](./Methods/Copy.md) | [ApiChart](../ApiChart/ApiChart.md) | 创建指定图表的副本。 |
| [Delete](./Methods/Delete.md) | boolean | 从父对象中删除指定的绘图对象。 |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | 返回图表空间中的所有系列。 |
| [GetChartType](./Methods/GetChartType.md) | [ChartType](../Enumeration/ChartType.md) | 返回图表对象的类型。 |
| [GetClassType](./Methods/GetClassType.md) | "chart" | 返回 ApiChart 类的类型。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetInternalId](./Methods/GetInternalId.md) | string | 返回当前绘图的内部 ID。 |
| [GetParentPage](./Methods/GetParentPage.md) | [ApiPage](../ApiPage/ApiPage.md) | 返回 ApiDrawing 类的类型。 |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 x 位置。 |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | 获取绘图在页面上的 y 位置。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) | 返回具有特定索引的系列。 |
| [GetTitle](./Methods/GetTitle.md) | string \| null | 返回图表标题文本。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | 从当前图表中删除指定的系列。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetAxieNumFormat](./Methods/SetAxieNumFormat.md) | boolean | 将指定的数字格式设置为坐标轴值。 |
| [SetCategoryName](./Methods/SetCategoryName.md) | boolean | 为指定的图表类别设置名称。 |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | 设置指定图表系列中数据点的填充。 |
| [SetDataPointNumFormat](./Methods/SetDataPointNumFormat.md) | boolean | 将指定的数字格式设置为图表数据点。 |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | 设置指定图表系列中数据点的轮廓。 |
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
| [SetMajorHorizontalGridlines](./Methods/SetMajorHorizontalGridlines.md) | boolean | 指定主要水平网格线的视觉属性。 |
| [SetMajorVerticalGridlines](./Methods/SetMajorVerticalGridlines.md) | boolean | 指定主要垂直网格线的视觉属性。 |
| [SetMarkerFill](./Methods/SetMarkerFill.md) | boolean | 设置指定图表系列中标记的填充。 |
| [SetMarkerOutLine](./Methods/SetMarkerOutLine.md) | boolean | 设置指定图表系列中标记的轮廓。 |
| [SetMinorHorizontalGridlines](./Methods/SetMinorHorizontalGridlines.md) | boolean | 指定次要水平网格线的视觉属性。 |
| [SetMinorVerticalGridlines](./Methods/SetMinorVerticalGridlines.md) | boolean | 指定次要垂直网格线的视觉属性。 |
| [SetPlotAreaFill](./Methods/SetPlotAreaFill.md) | boolean | 设置图表绘图区域的填充。 |
| [SetPlotAreaOutLine](./Methods/SetPlotAreaOutLine.md) | boolean | 设置图表绘图区域的轮廓。 |
| [SetPosX](./Methods/SetPosX.md) | boolean | 设置绘图在页面上的 x 位置。 |
| [SetPosY](./Methods/SetPosY.md) | boolean | 设置绘图在页面上的 y 位置。 |
| [SetPosition](./Methods/SetPosition.md) | boolean | 设置绘图在页面上的位置。 |
| [SetRotation](./Methods/SetRotation.md) | boolean | 设置当前绘图对象的旋转角度。 |
| [SetSeriaName](./Methods/SetSeriaName.md) | boolean | 为指定的图表系列设置名称。 |
| [SetSeriaNumFormat](./Methods/SetSeriaNumFormat.md) | boolean | 将指定的数字格式设置为图表系列。 |
| [SetSeriaValues](./Methods/SetSeriaValues.md) | boolean | 为指定的图表系列设置值。 |
| [SetSeriesFill](./Methods/SetSeriesFill.md) | boolean | 设置指定图表系列的填充。 |
| [SetSeriesOutLine](./Methods/SetSeriesOutLine.md) | boolean | 设置指定图表系列的轮廓。 |
| [SetShowDataLabels](./Methods/SetShowDataLabels.md) | boolean | 指定为图表显示哪些图表数据标签。 |
| [SetShowPointDataLabel](./Methods/SetShowPointDataLabel.md) | boolean | 指定数据标签的显示选项。 |
| [SetSize](./Methods/SetSize.md) | boolean | 设置对象（图像、形状、图表）边界框的大小。 |
| [SetTitle](./Methods/SetTitle.md) | boolean | 指定图表标题。 |
| [SetTitleFill](./Methods/SetTitleFill.md) | boolean | 设置图表标题的填充。 |
| [SetTitleOutLine](./Methods/SetTitleOutLine.md) | boolean | 设置图表标题的轮廓。 |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | 指定纵轴的方向。 |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | 指定图表纵轴的标题。 |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | 指定纵轴标签的字体大小。 |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | 指定纵轴的主刻度线。 |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | 指定纵轴的次刻度线。 |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | 指定纵轴刻度标签的位置。 |
| [SetXValues](./Methods/SetXValues.md) | boolean | 将 x 轴值设置为所有图表系列。仅用于散点图。 |
