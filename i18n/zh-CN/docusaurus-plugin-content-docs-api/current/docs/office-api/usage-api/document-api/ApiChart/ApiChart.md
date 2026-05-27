# ApiChart

ApiChart 是 [ApiDrawing](../ApiDrawing/ApiDrawing.md) 的子类。

## 方法

| 方法 | 返回值 | 描述 |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | 在主文档的指定位置插入分隔符。 |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | 通过样式 ID 为当前图表设置样式。 |
| [Copy](./Methods/Copy.md) | [ApiChart](../ApiChart/ApiChart.md) | 复制当前图表。 |
| [Delete](./Methods/Delete.md) | boolean | 删除当前图形对象。 |
| [Fill](./Methods/Fill.md) | boolean | 设置当前图形对象的填充格式属性。 |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | 返回图表空间中的所有系列。 |
| [GetChartType](./Methods/GetChartType.md) | [ChartType](../Enumeration/ChartType.md) | 返回图表对象的类型。 |
| [GetClassType](./Methods/GetClassType.md) | "chart" | 返回 ApiChart 类的类型。 |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | 返回可以插入段落或文本块的绘图内部内容（如果存在）。 |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | 获取当前绘图的水平翻转状态。 |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | 获取当前绘图的垂直翻转状态。 |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的高度。 |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | 返回当前绘图的指定锁定类型的锁定值。 |
| [GetName](./Methods/GetName.md) | string | 返回当前绘图的名称。 |
| [GetNextChart](./Methods/GetNextChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | 返回下一个内联图表（如果存在）。 |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | 返回下一个内联绘图对象（如果存在）。 |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | 返回包含图形对象的父内容控件。 |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | 返回包含图形对象的父段落。 |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | 返回包含图形对象的父表格。 |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | 返回包含图形对象的父表格单元格。 |
| [GetPrevChart](./Methods/GetPrevChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | 返回上一个内联图表（如果存在）。 |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | 返回上一个内联绘图对象（如果存在）。 |
| [GetRotation](./Methods/GetRotation.md) | number | 返回当前绘图对象的旋转角度。 |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) | 返回具有特定索引的系列。 |
| [GetTitle](./Methods/GetTitle.md) | string \| null | 返回图表标题文本。 |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | 返回当前绘图的宽度。 |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | 用富文本内容控件包装图形对象。 |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | 在指定位置插入段落。 |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | 从当前图表中删除指定的系列。 |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | 使用指定的系数缩放图形的高度。 |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | 使用指定的系数缩放图形的宽度。 |
| [Select](./Methods/Select.md) | boolean | 选择当前图形对象。 |
| [SetAxieNumFormat](./Methods/SetAxieNumFormat.md) | boolean | 将指定的数字格式设置为坐标轴值。 |
| [SetCategoryName](./Methods/SetCategoryName.md) | boolean | 为指定的图表类别设置名称。 |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | 设置指定图表系列中数据点的填充。 |
| [SetDataPointNumFormat](./Methods/SetDataPointNumFormat.md) | boolean | 将指定的数字格式设置为图表数据点。 |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | 设置指定图表系列中数据点的轮廓。 |
| [SetDistances](./Methods/SetDistances.md) | boolean | 指定将在当前绘图对象边缘与任何 |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | 将另一个绘图的属性设置到当前绘图。 |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | 设置当前绘图的水平翻转。 |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | 设置当前绘图的垂直翻转。 |
| [SetHorAlign](./Methods/SetHorAlign.md) | boolean | 指定浮动对象的水平对齐方式。 |
| [SetHorAxisLabelsFontSize](./Methods/SetHorAxisLabelsFontSize.md) | boolean | 指定横轴标签的字体大小。 |
| [SetHorAxisMajorTickMark](./Methods/SetHorAxisMajorTickMark.md) | boolean | 指定横轴的主刻度线。 |
| [SetHorAxisMinorTickMark](./Methods/SetHorAxisMinorTickMark.md) | boolean | 指定横轴的次刻度线。 |
| [SetHorAxisOrientation](./Methods/SetHorAxisOrientation.md) | boolean | 指定横轴的方向。 |
| [SetHorAxisTickLabelPosition](./Methods/SetHorAxisTickLabelPosition.md) | boolean | 指定横轴刻度标签的位置。 |
| [SetHorAxisTitle](./Methods/SetHorAxisTitle.md) | boolean | 指定图表横轴的标题。 |
| [SetHorFlip](./Methods/SetHorFlip.md) | boolean | 水平翻转当前绘图。 |
| [SetHorPosition](./Methods/SetHorPosition.md) | boolean | 设置浮动对象水平定位的绝对测量值。 |
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
| [SetRelativeHeight](./Methods/SetRelativeHeight.md) | boolean | 设置对象（图像、形状、图表）边界框的相对高度。 |
| [SetRelativeWidth](./Methods/SetRelativeWidth.md) | boolean | 设置对象（图像、形状、图表）边界框的相对宽度。 |
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
| [SetVerAlign](./Methods/SetVerAlign.md) | boolean | 指定浮动对象的垂直对齐方式。 |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | 指定纵轴的方向。 |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | 指定图表纵轴的标题。 |
| [SetVerPosition](./Methods/SetVerPosition.md) | boolean | 设置浮动对象垂直定位的绝对测量值。 |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | 指定纵轴标签的字体大小。 |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | 指定纵轴的主刻度线。 |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | 指定纵轴的次刻度线。 |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | 指定纵轴刻度标签的位置。 |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | 垂直翻转当前绘图。 |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | 设置当前对象（图像、形状、图表）的环绕类型。可以设置以下环绕样式类型之一： |
| [SetXValues](./Methods/SetXValues.md) | boolean | 将 x 轴值设置为所有图表系列。仅用于散点图。 |
| [ToJSON](./Methods/ToJSON.md) | JSON | 将 ApiDrawing 对象转换为 JSON 对象。 |
| [Unselect](./Methods/Unselect.md) | boolean | 从选择中移除当前图形对象。 |
