# Api

Represents the Api class.

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| ActiveSheet | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns an object that represents the active sheet. |
| AllComments | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current workbook including comments from all worksheets. |
| Comments | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments related to the whole workbook. |
| FreezePanes | [FreezePaneType](../Enumeration/FreezePaneType.md) | Returns or sets the type of freeze panes. |
| PivotTables | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables. |
| ReferenceStyle | [ReferenceStyle](../Enumeration/ReferenceStyle.md) | Returns or sets the reference style. |
| Selection | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| Sheets | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | Returns the Sheets collection that represents all the sheets in the active workbook. |
| WorksheetFunction | [ApiWorksheetFunction](../ApiWorksheetFunction/ApiWorksheetFunction.md) | Returns an object that represents the function list. |

## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddComment](./Methods/AddComment.md) | [ApiComment](../ApiComment/ApiComment.md) \| null | Returns an array of ApiComment objects. |
| [AddCustomFunction](./Methods/AddCustomFunction.md) | None | Creates a new custom function. The description of the function parameters and result is specified using JSDoc. The *@customfunction* tag is required in JSDoc. Parameters and results can be specified as the *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* types. Parameters can be required or optional. A user can also set a default value. The passed function can be asynchronous (async function or function returning a Promise). Inside the passed function, you can access the current cell address where the calculation is performed using *this.address*. You can also access the addresses of function arguments using *this.args[0].address*, *this.args[1].address*, etc. This method is not used in ONLYOFFICE Document Builder. Use AddCustomFunctionLibrary instead. |
| [AddCustomFunctionLibrary](./Methods/AddCustomFunctionLibrary.md) | None | Registers a new custom functions library (see the **SetCustomFunctions** plugin method). The description of the function parameters and result is specified using JSDoc. The *@customfunction* tag is required in JSDoc. Parameters and results can be specified as the *number / string / boolean / any / number[][] / string[][] / boolean[][] / any[][]* types. Parameters can be required or optional. A user can also set a default value. |
| [AddDefName](./Methods/AddDefName.md) | boolean | Adds a new name to a range of cells. |
| [AddSheet](./Methods/AddSheet.md) | None | Creates a new worksheet. The new worksheet becomes the active sheet. |
| [CentimetersToPoints](./Methods/CentimetersToPoints.md) | number | Converts centimeters to points. |
| [ClearCustomFunctions](./Methods/ClearCustomFunctions.md) | boolean | Clears all custom functions. |
| [CreateBlipFill](./Methods/CreateBlipFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a blip fill to apply to the object using the selected image as the object background. |
| [CreateBullet](./Methods/CreateBullet.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the character or symbol specified with the sSymbol parameter. |
| [CreateColorByName](./Methods/CreateColorByName.md) | [ApiColor](../ApiColor/ApiColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreateColorFromRGB](./Methods/CreateColorFromRGB.md) | [ApiColor](../ApiColor/ApiColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateCustomGeometry](./Methods/CreateCustomGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) | Creates a new custom geometry. |
| [CreateGradientStop](./Methods/CreateGradientStop.md) | [ApiGradientStop](../ApiGradientStop/ApiGradientStop.md) | Creates a gradient stop used for different types of gradients. |
| [CreateLinearGradientFill](./Methods/CreateLinearGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a linear gradient fill to apply to the object using the selected linear gradient as the object background. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [CreateNoFill](./Methods/CreateNoFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates no fill and removes the fill from the element. |
| [CreateNumbering](./Methods/CreateNumbering.md) | [ApiBullet](../ApiBullet/ApiBullet.md) | Creates a bullet for a paragraph with the numbering character or symbol specified with the numType parameter. |
| [CreateParagraph](./Methods/CreateParagraph.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Creates a new paragraph. |
| [CreatePatternFill](./Methods/CreatePatternFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a pattern fill to apply to the object using the selected pattern as the object background. |
| [CreatePresetColor](./Methods/CreatePresetColor.md) | [ApiPresetColor](../ApiPresetColor/ApiPresetColor.md) | Creates a color selecting it from one of the available color presets. |
| [CreatePresetGeometry](./Methods/CreatePresetGeometry.md) | [ApiGeometry](../ApiGeometry/ApiGeometry.md) \| null | Creates a geometry using one of the available preset shapes. |
| [CreateRGBColor](./Methods/CreateRGBColor.md) | [ApiRGBColor](../ApiRGBColor/ApiRGBColor.md) | Creates an RGB color setting the appropriate values for the red, green and blue color components. |
| [CreateRadialGradientFill](./Methods/CreateRadialGradientFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a radial gradient fill to apply to the object using the selected radial gradient as the object background. |
| [CreateRun](./Methods/CreateRun.md) | [ApiRun](../ApiRun/ApiRun.md) | Creates a new smaller text block to be inserted to the current paragraph or table. |
| [CreateSchemeColor](./Methods/CreateSchemeColor.md) | [ApiSchemeColor](../ApiSchemeColor/ApiSchemeColor.md) | Creates a complex color scheme selecting from one of the available schemes. |
| [CreateSolidFill](./Methods/CreateSolidFill.md) | [ApiFill](../ApiFill/ApiFill.md) | Creates a solid fill to apply to the object using a selected solid color as the object background. |
| [CreateStroke](./Methods/CreateStroke.md) | [ApiStroke](../ApiStroke/ApiStroke.md) | Creates a stroke adding shadows to the element. |
| [CreateTextPr](./Methods/CreateTextPr.md) | [ApiTextPr](../ApiTextPr/ApiTextPr.md) | Creates the empty text properties. |
| [EmusToMillimeters](./Methods/EmusToMillimeters.md) | [mm](../Enumeration/mm.md) | Converts English measure units (EMU) to millimeters. |
| [EmusToPoints](./Methods/EmusToPoints.md) | number | Converts EMUs (English Metric Units) to points. |
| [Format](./Methods/Format.md) | string | Returns a class formatted according to the instructions contained in the format expression. |
| [GetActiveSheet](./Methods/GetActiveSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) | Returns an object that represents the active sheet. |
| [GetActiveWorkbook](./Methods/GetActiveWorkbook.md) | [ApiWorkbook](../ApiWorkbook/ApiWorkbook.md) | Returns an object that represents the active workbook. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current workbook including comments from all worksheets. |
| [GetAllPivotTables](./Methods/GetAllPivotTables.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md)[] | Returns all pivot tables. |
| [GetCommentById](./Methods/GetCommentById.md) | [ApiComment](../ApiComment/ApiComment.md) | Returns a comment from the current document by its ID. |
| [GetComments](./Methods/GetComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments related to the whole workbook. |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | Returns the core properties interface for the workbook. This method is used to view or modify standard metadata such as title, author, and keywords. |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | Returns the workbook custom properties. |
| [GetDefName](./Methods/GetDefName.md) | [ApiName](../ApiName/ApiName.md) | Returns the ApiName object by the range name. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: **Application** - the application the document has been created with. **CreatedRaw** - the date and time when the file was created. **Created** - the parsed date and time when the file was created. **LastModifiedRaw** - the date and time when the file was last modified. **LastModified** - the parsed date and time when the file was last modified. **LastModifiedBy** - the name of the user who has made the latest change to the document. **Authors** - the persons who has created the file. **Title** - this property allows you to simplify your documents classification. **Tags** - this property allows you to simplify your documents classification. **Subject** - this property allows you to simplify your documents classification. **Comment** - this property allows you to simplify your documents classification. |
| [GetFreezePanesType](./Methods/GetFreezePanesType.md) | [FreezePaneType](../Enumeration/FreezePaneType.md) | Returns the freeze panes type. |
| [GetFullName](./Methods/GetFullName.md) | string | Returns the full name of the currently opened file. |
| [GetLocale](./Methods/GetLocale.md) | number | Returns the current locale ID. |
| [GetMailMergeData](./Methods/GetMailMergeData.md) | string[][] | Returns the mail merge data. |
| [GetPivotByName](./Methods/GetPivotByName.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) \| null | Returns a pivot table by its name, or null if it does not exist. |
| [GetRange](./Methods/GetRange.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns the ApiRange object by the range reference. |
| [GetReferenceStyle](./Methods/GetReferenceStyle.md) | [ReferenceStyle](../Enumeration/ReferenceStyle.md) | Returns the cell reference style. |
| [GetSelection](./Methods/GetSelection.md) | [ApiRange](../ApiRange/ApiRange.md) | Returns an object that represents the selected range. |
| [GetSheet](./Methods/GetSheet.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md) \| null | Returns an object that represents a sheet. |
| [GetSheets](./Methods/GetSheets.md) | [ApiWorksheet](../ApiWorksheet/ApiWorksheet.md)[] | Returns a sheet collection that represents all the sheets in the active workbook. |
| [GetThemesColors](./Methods/GetThemesColors.md) | string[] | Returns a list of all the available theme colors for the spreadsheet. |
| [GetWorksheetFunction](./Methods/GetWorksheetFunction.md) | [ApiWorksheetFunction](../ApiWorksheetFunction/ApiWorksheetFunction.md) | Returns the ApiWorksheetFunction object. |
| [InchesToPoints](./Methods/InchesToPoints.md) | number | Converts inches to points. |
| [InsertPivotExistingWorksheet](./Methods/InsertPivotExistingWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Inserts the specified pivot table into an existing worksheet. |
| [InsertPivotNewWorksheet](./Methods/InsertPivotNewWorksheet.md) | [ApiPivotTable](../ApiPivotTable/ApiPivotTable.md) | Inserts the specified pivot table into a new worksheet. |
| [Intersect](./Methods/Intersect.md) | [ApiRange](../ApiRange/ApiRange.md) \| null | Returns the ApiRange object that represents the rectangular intersection of two or more ranges. If one or more ranges from a different worksheet are specified, an error will be returned. |
| [LinesToPoints](./Methods/LinesToPoints.md) | number | Converts lines to points (1 line = 12 points). |
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
| [RecalculateAllFormulas](./Methods/RecalculateAllFormulas.md) | boolean | Recalculates all formulas in the active workbook. |
| [RefreshAllPivots](./Methods/RefreshAllPivots.md) | None | Refreshes all pivot tables. |
| [RemoveCustomFunction](./Methods/RemoveCustomFunction.md) | boolean | Removes a custom function. |
| [ReplaceTextSmart](./Methods/ReplaceTextSmart.md) | boolean | Replaces each paragraph (or text in cell) in the select with the corresponding text from an array of strings. |
| [Save](./Methods/Save.md) | None | Saves changes to the specified document. |
| [SetFreezePanesType](./Methods/SetFreezePanesType.md) | None | Sets a type to the freeze panes. |
| [SetLocale](./Methods/SetLocale.md) | None | Sets a locale to the document. |
| [SetReferenceStyle](./Methods/SetReferenceStyle.md) | None | Sets the cell reference style. |
| [SetThemeColors](./Methods/SetThemeColors.md) | boolean | Sets the theme colors to the current spreadsheet. |
| [TwipsToPoints](./Methods/TwipsToPoints.md) | number | Converts twips to points. |
| [attachEvent](./Methods/attachEvent.md) | None | Subscribes to the specified event and calls the callback function when the event fires. |
| [detachEvent](./Methods/detachEvent.md) | None | Unsubscribes from the specified event. |
