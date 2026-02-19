# Api

Represents the Api class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) | Adds a comment to the specifed document element or array of Runs. |
| [CentimetersToPoints](./Methods/CentimetersToPoints.md) | number | Converts centimeters to points. |
| [ConvertDocument](./Methods/ConvertDocument.md) | string | Converts a document to Markdown or HTML text. |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a blip fill to apply to the object using the selected image as the object background. |
| [CreateBlockLvlSdt](./Methods/CreateBlockLvlSdt.md) | [ApiBlockLvlSdt](../ApiBlockLvlSdt/ApiBlockLvlSdt.md) | Creates a new block level container. |
| [CreateChart](./Methods/CreateChart.md) | [ApiChart](../ApiChart/ApiChart.md) | Creates a chart with the parameters specified. |
| [CreateCheckBoxContentControl](./Methods/CreateCheckBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a checkbox content control. |
| [CreateComboBoxContentControl](./Methods/CreateComboBoxContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new combo box container with the given list of options. |
| [CreateCustomGeometry](./Methods/CreateCustomGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Creates a new custom geometry. |
| [CreateDatePickerContentControl](./Methods/CreateDatePickerContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new date picker content control. |
| [CreateDropDownListContentControl](./Methods/CreateDropDownListContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new drop-down list container with the given list of options. |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | Creates a gradient stop used for different types of gradients. |
| [CreateGroup](./Methods/CreateGroup.md) | [ApiGroup](../ApiGroup/ApiGroup.md) | Groups an array of drawings. |
| [CreateHyperlink](./Methods/CreateHyperlink.md) | [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md) | Creates a new hyperlink text block to be inserted to the current paragraph or table. |
| [CreateImage](./Methods/CreateImage.md) | [ApiImage](../ApiImage/ApiImage.md) | Creates an image with the parameters specified. |
| [CreateInlineLvlSdt](./Methods/CreateInlineLvlSdt.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new inline container. |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background. |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates no fill and removes the fill from the element. |
| [CreateOleObject](./Methods/CreateOleObject.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md) | Creates an OLE object with the parameters specified. |
| [CreateParaPr](./Methods/CreateParaPr.md) | [ApiParaPr](../ApiParaPr/ApiParaPr.md) | Creates the empty paragraph properties. |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a pattern fill to apply to the object using the selected pattern as the object background. |
| [CreatePictureContentControl](./Methods/CreatePictureContentControl.md) | [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md) | Creates a new picture container. |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreatePresetGeometry](./Methods/CreatePresetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) \| null | Creates a geometry using one of the available preset shapes. |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background. |
| [CreateRange](./Methods/CreateRange.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Creates an element range. If you do not specify the start and end positions, the range will be taken from the entire element. |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a new smaller text block to be inserted to the current paragraph or table. |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | Creates a complex color scheme selecting from one of the available schemes. |
| [CreateShape](./Methods/CreateShape.md) | [ApiShape](../ApiShape/ApiShape.md) | Creates a shape with the parameters specified. |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a solid fill to apply to the object using a selected solid color as the object background. |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Creates a stroke adding shadows to the element. |
| [CreateTable](./Methods/CreateTable.md) | [ApiTable](../ApiTable/ApiTable.md) | Creates a new table with a specified number of rows and columns. |
| [CreateTableCellPr](./Methods/CreateTableCellPr.md) | [ApiTableCellPr](../ApiTableCellPr/ApiTableCellPr.md) | Creates the empty table cell properties. |
| [CreateTablePr](./Methods/CreateTablePr.md) | [ApiTablePr](../ApiTablePr/ApiTablePr.md) | Creates the empty table properties. |
| [CreateTableRowPr](./Methods/CreateTableRowPr.md) | [ApiTableRowPr](../ApiTableRowPr/ApiTableRowPr.md) | Creates the empty table row properties. |
| [CreateTableStylePr](./Methods/CreateTableStylePr.md) | [ApiTableStylePr](../ApiTableStylePr/ApiTableStylePr.md) | Creates the empty table style properties. |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Creates the empty text properties. |
| [CreateWordArt](./Methods/CreateWordArt.md) | [ApiDrawing](../ApiDrawing/ApiDrawing.md) | Creates a Text Art object with the parameters specified. |
| [EmusToMillimeters](./Methods/EmusToMillimeters.md) | [mm](../Enumeration/mm.md) | Converts English measure units (EMU) to millimeters. |
| [EmusToPoints](./Methods/EmusToPoints.md) | number | Converts EMUs (English Metric Units) to points. |
| [FromJSON](./Methods/FromJSON.md) | object | Converts the specified JSON object into the Document Builder object of the corresponding type. |
| [GetByInternalId](./Methods/GetByInternalId.md) | object | Returns the object by it's internal ID. |
| [GetDocument](./Methods/GetDocument.md) | [ApiDocument](../ApiDocument/ApiDocument.md) | Returns the main document. |
| [GetFullName](./Methods/GetFullName.md) | string | Returns the full name of the currently opened file. |
| [GetMailMergeReceptionsCount](./Methods/GetMailMergeReceptionsCount.md) | number | Returns the mail merge receptions count. |
| [GetMailMergeTemplateDocContent](./Methods/GetMailMergeTemplateDocContent.md) | [ApiDocumentContent](../ApiDocumentContent/ApiDocumentContent.md) | Returns the mail merge template document. |
| [InchesToPoints](./Methods/InchesToPoints.md) | number | Converts inches to points. |
| [LinesToPoints](./Methods/LinesToPoints.md) | number | Converts lines to points (1 line = 12 points). |
| [LoadMailMergeData](./Methods/LoadMailMergeData.md) | boolean | Loads data for the mail merge. |
| [MailMerge](./Methods/MailMerge.md) | boolean | Starts the mail merge process. |
| [MillimetersToEmus](./Methods/MillimetersToEmus.md) | [EMU](../Enumeration/EMU.md) | Converts millimeters to English Metric Units (EMUs). The result is an integer value. |
| [MillimetersToPixels](./Methods/MillimetersToPixels.md) | number | Converts millimeters to pixels. |
| [MillimetersToPoints](./Methods/MillimetersToPoints.md) | number | Converts millimeters to points. |
| [PicasToPoints](./Methods/PicasToPoints.md) | number | Converts picas to points. |
| [PixelsToEmus](./Methods/PixelsToEmus.md) | number | Converts pixels to EMUs (English Metric Units). |
| [PixelsToPoints](./Methods/PixelsToPoints.md) | number | Converts pixels to points. |
| [PointsToCentimeters](./Methods/PointsToCentimeters.md) | number | Converts points to centimeters. |
| [PointsToEmus](./Methods/PointsToEmus.md) | number | Converts points to EMUs (English Metric Units). |
| [PointsToInches](./Methods/PointsToInches.md) | number | Converts points to inches. |
| [PointsToLines](./Methods/PointsToLines.md) | number | Converts points to lines (1 line = 12 points). |
| [PointsToMillimeters](./Methods/PointsToMillimeters.md) | number | Converts points to millimeters. |
| [PointsToPicas](./Methods/PointsToPicas.md) | number | Converts points to picas (1 pica = 12 points). |
| [PointsToPixels](./Methods/PointsToPixels.md) | number | Converts points to pixels. |
| [PointsToTwips](./Methods/PointsToTwips.md) | number | Converts points to twips. |
| [ReplaceDocumentContent](./Methods/ReplaceDocumentContent.md) | boolean | Replaces the main document content with another document content. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [Save](./Methods/Save.md) | boolean | Saves changes to the specified document. |
| [TwipsToPoints](./Methods/TwipsToPoints.md) | number | Converts twips to points. |
| [attachEvent](./Methods/attachEvent.md) | boolean | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | boolean | Unsubscribes from the specified event. |
