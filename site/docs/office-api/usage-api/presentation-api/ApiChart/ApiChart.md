# ApiChart

ApiChart is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | Sets a style to the current chart by style ID. |
| [Copy](./Methods/Copy.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a copy of the specified chart. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the specified drawing object from the parent. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | Returns all series from the chart space. |
| [GetChartType](./Methods/GetChartType.md) | [ChartType](../Enumeration/ChartType.md) | Returns a type of the chart object. |
| [GetClassType](./Methods/GetClassType.md) | "chart" | Returns a type of the ApiChart class. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetHyperlink](./Methods/GetHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) \| null | Returns the hyperlink from the current drawing object (shape or image). |
| [GetInternalId](./Methods/GetInternalId.md) | string | Returns an internal ID of the current drawing object. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetParent](./Methods/GetParent.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| [ApiLayout](../ApiLayout/ApiLayout.md) \| [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent object. |
| [GetParentLayout](./Methods/GetParentLayout.md) | [ApiLayout](../ApiLayout/ApiLayout.md) \| null | Returns the drawing parent slide layout. |
| [GetParentMaster](./Methods/GetParentMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns the drawing parent slide master. |
| [GetParentSlide](./Methods/GetParentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the drawing parent slide. |
| [GetPlaceholder](./Methods/GetPlaceholder.md) | [ApiPlaceholder](../ApiPlaceholder/ApiPlaceholder.md) \| null | Returns a placeholder from the current drawing object. |
| [GetPosX](./Methods/GetPosX.md) | [EMU](../Enumeration/EMU.md) | Gets the x position of the drawing on the slide. |
| [GetPosY](./Methods/GetPosY.md) | [EMU](../Enumeration/EMU.md) | Gets the y position of the drawing on the slide. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) | Returns the series with a specific index. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Returns the chart title text. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | Removes the specified series from the current chart. |
| [ReplacePlaceholder](./Methods/ReplacePlaceholder.md) | boolean | Replaces the placeholder by a drawing on the slide. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetAxieNumFormat](./Methods/SetAxieNumFormat.md) | boolean | Sets the specified numeric format to the axis values. |
| [SetCategoryName](./Methods/SetCategoryName.md) | boolean | Sets a name to the specified chart category. |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | Sets the fill to the data point in the specified chart series. |
| [SetDataPointNumFormat](./Methods/SetDataPointNumFormat.md) | boolean | Sets the specified numeric format to the chart data point. |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | Sets the outline to the data point in the specified chart series. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHorAxisLabelsFontSize](./Methods/SetHorAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the horizontal axis. |
| [SetHorAxisMajorTickMark](./Methods/SetHorAxisMajorTickMark.md) | boolean | Specifies major tick mark for the horizontal axis. |
| [SetHorAxisMinorTickMark](./Methods/SetHorAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the horizontal axis. |
| [SetHorAxisOrientation](./Methods/SetHorAxisOrientation.md) | boolean | Specifies the horizontal axis orientation. |
| [SetHorAxisTickLabelPosition](./Methods/SetHorAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the horizontal axis. |
| [SetHorAxisTitle](./Methods/SetHorAxisTitle.md) | boolean | Specifies the chart horizontal axis title. |
| [SetHyperlink](./Methods/SetHyperlink.md) | boolean | Sets a hyperlink to the current drawing object (shape or image). |
| [SetLegendFill](./Methods/SetLegendFill.md) | boolean | Sets the fill to the chart legend. |
| [SetLegendFontSize](./Methods/SetLegendFontSize.md) | boolean | Specifies the legend font size. |
| [SetLegendOutLine](./Methods/SetLegendOutLine.md) | boolean | Sets the outline to the chart legend. |
| [SetLegendPos](./Methods/SetLegendPos.md) | boolean | Specifies the chart legend position. |
| [SetLockValue](./Methods/SetLockValue.md) | boolean | Sets the lock value to the specified lock type of the current drawing. |
| [SetMajorHorizontalGridlines](./Methods/SetMajorHorizontalGridlines.md) | boolean | Specifies major horizontal gridline visual properties. |
| [SetMajorVerticalGridlines](./Methods/SetMajorVerticalGridlines.md) | boolean | Specifies major vertical gridline visual properties. |
| [SetMarkerFill](./Methods/SetMarkerFill.md) | boolean | Sets the fill to the marker in the specified chart series. |
| [SetMarkerOutLine](./Methods/SetMarkerOutLine.md) | boolean | Sets the outline to the marker in the specified chart series. |
| [SetMinorHorizontalGridlines](./Methods/SetMinorHorizontalGridlines.md) | boolean | Specifies minor horizontal gridline visual properties. |
| [SetMinorVerticalGridlines](./Methods/SetMinorVerticalGridlines.md) | boolean | Specifies minor vertical gridline visual properties. |
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPlaceholder](./Methods/SetPlaceholder.md) | boolean | Sets the specified placeholder to the current drawing object. |
| [SetPlotAreaFill](./Methods/SetPlotAreaFill.md) | boolean | Sets the fill to the chart plot area. |
| [SetPlotAreaOutLine](./Methods/SetPlotAreaOutLine.md) | boolean | Sets the outline to the chart plot area. |
| [SetPosX](./Methods/SetPosX.md) | boolean | Sets the x position of the drawing on the slide. |
| [SetPosY](./Methods/SetPosY.md) | boolean | Sets the y position of the drawing on the slide. |
| [SetPosition](./Methods/SetPosition.md) | None | Sets the position of the drawing on the slide. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSeriaName](./Methods/SetSeriaName.md) | boolean | Sets a name to the specified chart series. |
| [SetSeriaNumFormat](./Methods/SetSeriaNumFormat.md) | boolean | Sets the specified numeric format to the chart series. |
| [SetSeriaValues](./Methods/SetSeriaValues.md) | boolean | Sets values to the specified chart series. |
| [SetSeriesFill](./Methods/SetSeriesFill.md) | boolean | Sets the fill to the specified chart series. |
| [SetSeriesOutLine](./Methods/SetSeriesOutLine.md) | boolean | Sets the outline to the specified chart series. |
| [SetShowDataLabels](./Methods/SetShowDataLabels.md) | boolean | Specifies which chart data labels are shown for the chart. |
| [SetShowPointDataLabel](./Methods/SetShowPointDataLabel.md) | boolean | Spicifies the show options for data labels. |
| [SetSize](./Methods/SetSize.md) | None | Sets the size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Specifies the chart title. |
| [SetTitleFill](./Methods/SetTitleFill.md) | boolean | Sets the fill to the chart title. |
| [SetTitleOutLine](./Methods/SetTitleOutLine.md) | boolean | Sets the outline to the chart title. |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | Specifies the vertical axis orientation. |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | Specifies the chart vertical axis title. |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the vertical axis. |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | Specifies major tick mark for the vertical axis. |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the vertical axis. |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the vertical axis. |
| [SetXValues](./Methods/SetXValues.md) | boolean | Sets the x-axis values to all chart series. It is used with the scatter charts only. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
