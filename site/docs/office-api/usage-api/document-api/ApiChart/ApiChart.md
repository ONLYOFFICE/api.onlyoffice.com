# ApiChart

ApiChart is a subclass of [ApiDrawing](../ApiDrawing/ApiDrawing.md).

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddBreak](./Methods/AddBreak.md) | boolean | Inserts a break at the specified location in the main document. |
| [ApplyChartStyle](./Methods/ApplyChartStyle.md) | boolean | Sets a style to the current chart by style ID. |
| [Copy](./Methods/Copy.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Copies the current graphic object. |
| [Delete](./Methods/Delete.md) | boolean | Deletes the current graphic object. |
| [Fill](./Methods/Fill.md) | boolean | Sets the fill formatting properties to the current graphic object. |
| [GetAllSeries](./Methods/GetAllSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md)[] | Returns all series from the chart space. |
| [GetChartType](./Methods/GetChartType.md) | [ChartType](../Enumeration/ChartType.md) | Returns a type of the chart object. |
| [GetClassType](./Methods/GetClassType.md) | "chart" | Returns a type of the ApiChart class. |
| [GetContent](./Methods/GetContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the drawing inner contents where a paragraph or text runs can be inserted if it exists. |
| [GetFlipH](./Methods/GetFlipH.md) | boolean \| null | Get horizontal flip of current drawing. |
| [GetFlipV](./Methods/GetFlipV.md) | boolean \| null | Get vertical flip of current drawing. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the height of the current drawing. |
| [GetLockValue](./Methods/GetLockValue.md) | boolean | Returns the lock value for the specified lock type of the current drawing. |
| [GetName](./Methods/GetName.md) | string | Returns the name of the current drawing. |
| [GetNextChart](./Methods/GetNextChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | Returns the next inline chart if exists. |
| [GetNextDrawing](./Methods/GetNextDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the next inline drawing object if exists. |
| [GetParentContentControl](./Methods/GetParentContentControl.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null | Returns a parent content control that contains the graphic object. |
| [GetParentParagraph](./Methods/GetParentParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| null | Returns a parent paragraph that contains the graphic object. |
| [GetParentTable](./Methods/GetParentTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns a parent table that contains the graphic object. |
| [GetParentTableCell](./Methods/GetParentTableCell.md) | [ApiTableCell](../ApiTableCell/ApiTableCell.md) \| null | Returns a parent table cell that contains the graphic object. |
| [GetPrevChart](./Methods/GetPrevChart.md) | [ApiChart](../ApiChart/ApiChart.md) \| null | Returns the previous inline chart if exists. |
| [GetPrevDrawing](./Methods/GetPrevDrawing.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| null | Returns the previous inline drawing object if exists. |
| [GetRotation](./Methods/GetRotation.md) | number | Returns the rotation angle of the current drawing object. |
| [GetSeries](./Methods/GetSeries.md) | [ApiChartSeries](../ApiChartSeries/ApiChartSeries.md) | Returns the series with a specific index. |
| [GetTitle](./Methods/GetTitle.md) | string \| null | Returns the chart title text. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the width of the current drawing. |
| [InsertInContentControl](./Methods/InsertInContentControl.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) \| [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Wraps the graphic object with a rich text content control. |
| [InsertParagraph](./Methods/InsertParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) \| [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Inserts a paragraph at the specified position. |
| [RemoveSeria](./Methods/RemoveSeria.md) | boolean | Removes the specified series from the current chart. |
| [ScaleHeight](./Methods/ScaleHeight.md) | boolean | Scales the height of the figure using the specified coefficient. |
| [ScaleWidth](./Methods/ScaleWidth.md) | boolean | Scales the width of the figure using the specified coefficient. |
| [Select](./Methods/Select.md) | boolean | Selects the current graphic object. |
| [SetAxieNumFormat](./Methods/SetAxieNumFormat.md) | boolean | Sets the specified numeric format to the axis values. |
| [SetCategoryName](./Methods/SetCategoryName.md) | boolean | Sets a name to the specified chart category. |
| [SetDataPointFill](./Methods/SetDataPointFill.md) | boolean | Sets the fill to the data point in the specified chart series. |
| [SetDataPointNumFormat](./Methods/SetDataPointNumFormat.md) | boolean | Sets the specified numeric format to the chart data point. |
| [SetDataPointOutLine](./Methods/SetDataPointOutLine.md) | boolean | Sets the outline to the data point in the specified chart series. |
| [SetDistances](./Methods/SetDistances.md) | boolean | Specifies the minimum distance which will be maintained between the edges of the current drawing object and any subsequent text. |
| [SetDrawingPrFromDrawing](./Methods/SetDrawingPrFromDrawing.md) | boolean | Sets the properties from another drawing to the current drawing. The following properties will be copied: horizontal and vertical alignment, distance between the edges of the current drawing object and any subsequent text, wrapping style, drawing name, title and description. |
| [SetFlipH](./Methods/SetFlipH.md) | boolean | Sets the horizontal flip of the current drawing. |
| [SetFlipV](./Methods/SetFlipV.md) | boolean | Sets the vertical flip of the current drawing. |
| [SetHorAlign](./Methods/SetHorAlign.md) | boolean | Specifies how the floating object will be horizontally aligned. |
| [SetHorAxisLabelsFontSize](./Methods/SetHorAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the horizontal axis. |
| [SetHorAxisMajorTickMark](./Methods/SetHorAxisMajorTickMark.md) | boolean | Specifies major tick mark for the horizontal axis. |
| [SetHorAxisMinorTickMark](./Methods/SetHorAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the horizontal axis. |
| [SetHorAxisOrientation](./Methods/SetHorAxisOrientation.md) | boolean | Specifies the horizontal axis orientation. |
| [SetHorAxisTickLabelPosition](./Methods/SetHorAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the horizontal axis. |
| [SetHorAxisTitle](./Methods/SetHorAxisTitle.md) | boolean | Specifies the chart horizontal axis title. |
| [SetHorFlip](./Methods/SetHorFlip.md) | boolean | Flips the current drawing horizontally. |
| [SetHorPosition](./Methods/SetHorPosition.md) | boolean | Sets the absolute measurement for the horizontal positioning of the floating object. |
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
| [SetName](./Methods/SetName.md) | boolean | Sets the name of the current drawing. If another drawing with the same name already exists, that drawing's name will be reset to a default auto-generated name. |
| [SetOutLine](./Methods/SetOutLine.md) | boolean | Sets the outline properties to the specified graphic object. |
| [SetPlotAreaFill](./Methods/SetPlotAreaFill.md) | boolean | Sets the fill to the chart plot area. |
| [SetPlotAreaOutLine](./Methods/SetPlotAreaOutLine.md) | boolean | Sets the outline to the chart plot area. |
| [SetRelativeHeight](./Methods/SetRelativeHeight.md) | boolean | Sets the relative height of the object (image, shape, chart) bounding box. |
| [SetRelativeWidth](./Methods/SetRelativeWidth.md) | boolean | Sets the relative width of the object (image, shape, chart) bounding box. |
| [SetRotation](./Methods/SetRotation.md) | boolean | Sets the rotation angle to the current drawing object. |
| [SetSeriaName](./Methods/SetSeriaName.md) | boolean | Sets a name to the specified chart series. |
| [SetSeriaNumFormat](./Methods/SetSeriaNumFormat.md) | boolean | Sets the specified numeric format to the chart series. |
| [SetSeriaValues](./Methods/SetSeriaValues.md) | boolean | Sets values to the specified chart series. |
| [SetSeriesFill](./Methods/SetSeriesFill.md) | boolean | Sets the fill to the specified chart series. |
| [SetSeriesOutLine](./Methods/SetSeriesOutLine.md) | boolean | Sets the outline to the specified chart series. |
| [SetShowDataLabels](./Methods/SetShowDataLabels.md) | boolean | Specifies which chart data labels are shown for the chart. |
| [SetShowPointDataLabel](./Methods/SetShowPointDataLabel.md) | boolean | Spicifies the show options for data labels. |
| [SetSize](./Methods/SetSize.md) | boolean | Sets the size of the object (image, shape, chart) bounding box. |
| [SetTitle](./Methods/SetTitle.md) | boolean | Specifies the chart title. |
| [SetTitleFill](./Methods/SetTitleFill.md) | boolean | Sets the fill to the chart title. |
| [SetTitleOutLine](./Methods/SetTitleOutLine.md) | boolean | Sets the outline to the chart title. |
| [SetVerAlign](./Methods/SetVerAlign.md) | boolean | Specifies how the floating object will be vertically aligned. |
| [SetVerAxisOrientation](./Methods/SetVerAxisOrientation.md) | boolean | Specifies the vertical axis orientation. |
| [SetVerAxisTitle](./Methods/SetVerAxisTitle.md) | boolean | Specifies the chart vertical axis title. |
| [SetVerPosition](./Methods/SetVerPosition.md) | boolean | Sets the absolute measurement for the vertical positioning of the floating object. |
| [SetVertAxisLabelsFontSize](./Methods/SetVertAxisLabelsFontSize.md) | boolean | Specifies font size for labels of the vertical axis. |
| [SetVertAxisMajorTickMark](./Methods/SetVertAxisMajorTickMark.md) | boolean | Specifies major tick mark for the vertical axis. |
| [SetVertAxisMinorTickMark](./Methods/SetVertAxisMinorTickMark.md) | boolean | Specifies minor tick mark for the vertical axis. |
| [SetVertAxisTickLabelPosition](./Methods/SetVertAxisTickLabelPosition.md) | boolean | Spicifies tick labels position for the vertical axis. |
| [SetVertFlip](./Methods/SetVertFlip.md) | boolean | Flips the current drawing vertically. |
| [SetWrappingStyle](./Methods/SetWrappingStyle.md) | boolean | Sets the wrapping type of the current object (image, shape, chart). One of the following wrapping style types can be set: **"inline"** - the object is considered to be a part of the text, like a character, so when the text moves, the object moves as well. In this case the positioning options are inaccessible. If one of the following styles is selected, the object can be moved independently of the text and positioned on the page exactly: **"square"** - the text wraps the rectangular box that bounds the object. **"tight"** - the text wraps the actual object edges. **"through"** - the text wraps around the object edges and fills in the open white space within the object. **"topAndBottom"** - the text is only above and below the object. **"behind"** - the text overlaps the object. **"inFront"** - the object overlaps the text. |
| [SetXValues](./Methods/SetXValues.md) | boolean | Sets the x-axis values to all chart series. It is used with the scatter charts only. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiDrawing object into the JSON object. |
| [Unselect](./Methods/Unselect.md) | boolean | Removes the current graphic object from the selection. |
