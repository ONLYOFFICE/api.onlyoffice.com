# ApiChart

Class representing a chart.

ApiChart is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddSeria](./Methods/AddSeria.md) | None | Adds a new series to the current chart. |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | Sets a style to the current chart by style ID. |
| [Copy](./Methods/Copy.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a copy of the current chart. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | Returns all series from the chart space. |
| [GetChartType](./Methods/GetChartType.md) | [ChartTypeLegacy](../Enumeration/ChartTypeLegacy.md) | Returns a type of the chart object. |
| [GetClassType](./Methods/GetClassType.md) | "chart" | Returns a type of the ApiChart class. |
| [GetDescription](./Methods/GetDescription.md) | string \| null | Gets the description of the current drawing. |
| [GetFill](./Methods/GetFill.md) | [ApiFill](../ApiFill/ApiFill.md) \| null | Gets the fill formatting properties from the current graphic object. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
| [GetLine](./Methods/GetLine.md) | [ApiStroke](../ApiStroke/ApiStroke.md) \| null | Gets the outline properties from the current graphic object. |
| [GetLockAspect](./Methods/GetLockAspect.md) | boolean | Returns whether the aspect ratio of the drawing is locked. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParentSheet](./Methods/GetParentSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) \| null \| undefined | Returns the parent sheet of the current drawing. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Returns the x position of the current drawing on the worksheet. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Returns the y position of the current drawing on the worksheet. |
| [GetPosition](./Methods/GetPosition.md) | [DrawingCellAnchor](../Enumeration/DrawingCellAnchor.md) \| null | Returns the cell anchor of the current drawing; the offsets are limited by the anchor cell. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) \| null \| undefined | Returns the series with a specific index. |
| [GetShadow](./Methods/GetShadow.md) | [ApiShadow](../ApiShadow/ApiShadow.md) \| null | Returns the shadow of the current graphic object. |
| [GetTextRange](./Methods/GetTextRange.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md) \| null | Returns a text range that covers the whole text of the current drawing. Creates a text body if the drawing does not yet have one. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Returns the chart title text. |
| [GetType](./Methods/GetType.md) | [ChartType](../Enumeration/ChartType.md) | Returns a type of the chart object using the chart type names from the \{@link ChartType\} enumeration. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [HasTextContent](./Methods/HasTextContent.md) | boolean | Checks whether the current drawing has a text body. |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | Removes the specified series from the current chart. |
| [Select](./Methods/Select.md) | None | Selects the current graphic object. |
| [SetAxisNumFormat](./Methods/SetAxisNumFormat.md) | boolean | Sets the specified numeric format to the axis values. |
| [SetCatFormula](./Methods/SetCatFormula.md) | None | Sets a range with the category values to the current chart. |
| [SetDataLabelsTextPr](./Methods/SetDataLabelsTextPr.md) | boolean | Sets the text properties to the chart data labels. |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | Sets the fill to the data point in the specified chart series. |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | Sets the outline to the data point in the specified chart series. |
| [SetDescription](./Methods/SetDescription.md) | boolean | Sets the description of the current drawing. |
| [SetFill](./Methods/SetFill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHorAxisLabelsFontSize](./Methods/SetHorAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the horizontal axis. |
| [SetHorAxisMajorTickMark](./Methods/SetHorAxisMajorTickMark.md) | boolean | Specifies major tick mark for the horizontal axis. |
| [SetHorAxisMinorTickMark](./Methods/SetHorAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the horizontal axis. |
| [SetHorAxisOrientation](./Methods/SetHorAxisOrientation.md) | boolean | Specifies the horizontal axis orientation. |
| [SetHorAxisTickLabelPosition](./Methods/SetHorAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the horizontal axis. |
| [SetHorAxisTitle](./Methods/SetHorAxisTitle.md) | boolean | Specifies the chart horizontal axis title. |
| [SetLegendFill](./Methods/SetLegendFill.md) | boolean | Sets the fill to the chart legend. |
| [SetLegendFontSize](./Methods/SetLegendFontSize.md) | boolean | Specifies the legend font size. |
| [SetLegendOutLine](./Methods/SetLegendOutLine.md) | boolean | Sets the outline to the chart legend. |
| [SetLegendPos](./Methods/SetLegendPos.md) | boolean | Specifies the chart legend position. |
| [SetLine](./Methods/SetLine.md) | boolean | Sets the outline properties to the current graphic object. |
| [SetLockAspect](./Methods/SetLockAspect.md) | boolean | Sets whether the aspect ratio of the drawing is locked. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetMajorHorizontalGridlines](./Methods/SetMajorHorizontalGridlines.md) | boolean | Specifies major horizontal gridline visual properties. |
| [SetMajorVerticalGridlines](./Methods/SetMajorVerticalGridlines.md) | boolean | Specifies major vertical gridline visual properties. |
| [SetMarkerFill](./Methods/SetMarkerFill.md) | boolean | Sets the fill to the marker in the specified chart series. |
| [SetMarkerOutLine](./Methods/SetMarkerOutLine.md) | boolean | Sets the outline to the marker in the specified chart series. |
| [SetMinorHorizontalGridlines](./Methods/SetMinorHorizontalGridlines.md) | boolean | Specifies minor horizontal gridline visual properties. |
| [SetMinorVerticalGridlines](./Methods/SetMinorVerticalGridlines.md) | boolean | Specifies minor vertical gridline visual properties. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPlotAreaFill](./Methods/SetPlotAreaFill.md) | boolean | Sets the fill to the chart plot area. |
| [SetPlotAreaOutLine](./Methods/SetPlotAreaOutLine.md) | boolean | Sets the outline to the chart plot area. |
| [SetPointDataLabelTextPr](./Methods/SetPointDataLabelTextPr.md) | boolean | Sets the text properties to the chart point data label. |
| [SetPosition](./Methods/SetPosition.md) | None | Changes the position for the drawing object. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSeriaName](./Methods/SetSeriaName.md) | boolean | Sets a name to the specified series. |
| [SetSeriaValues](./Methods/SetSeriaValues.md) | boolean | Sets values from the specified range to the specified series. |
| [SetSeriaXValues](./Methods/SetSeriaXValues.md) | boolean | Sets the x-axis values from the specified range to the specified series. |
| [SetSeriesFill](./Methods/SetSeriesFill.md) | boolean | Sets the fill to the specified chart series. |
| [SetSeriesOutLine](./Methods/SetSeriesOutLine.md) | boolean | Sets the outline to the specified chart series. |
| [SetShadow](./Methods/SetShadow.md) | boolean | Sets the shadow to the current graphic object. |
| [SetShowDataLabels](./Methods/SetShowDataLabels.md) | boolean | Specifies which chart data labels are shown for the chart. |
| [SetShowDataTable](./Methods/SetShowDataTable.md) | boolean | Specifies whether the data table is displayed below the chart, optionally with the legend keys. |
| [SetShowPointDataLabel](./Methods/SetShowPointDataLabel.md) | boolean | Spicifies the show options for data labels. |
| [SetSize](./Methods/SetSize.md) | None | Sets a size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Specifies the chart title. |
| [SetTitleFill](./Methods/SetTitleFill.md) | boolean | Sets the fill to the chart title. |
| [SetTitleOutLine](./Methods/SetTitleOutLine.md) | boolean | Sets the outline to the chart title. |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | Specifies the vertical axis orientation. |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | Specifies the chart vertical axis title. |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the vertical axis. |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | Specifies major tick mark for the vertical axis. |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the vertical axis. |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the vertical axis. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current drawing from the selection. |
