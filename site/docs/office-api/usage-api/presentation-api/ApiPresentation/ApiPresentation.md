# ApiPresentation

Class representing a presentation.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddMaster](./Methods/AddMaster.md) | boolean | Adds the slide master to the presentation slide masters collection. |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | Adds a math equation to the current presentation. |
| [AddSlide](./Methods/AddSlide.md) | None | Appends a new slide to the end of the presentation. |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | Applies a theme to all the slides in the presentation. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [EnterText](./Methods/EnterText.md) | boolean | Add text to the document on the cursor position. |
| [GetActiveShape](./Methods/GetActiveShape.md) | [ApiShape](../ApiShape/ApiShape.md) \| null | Returns the shape that is currently selected or being edited in the presentation. |
| [GetActiveTable](./Methods/GetActiveTable.md) | [ApiTable](../ApiTable/ApiTable.md) \| null | Returns the table that is currently selected or being edited in the presentation. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns an array with all the chart objects from the presentation slides, excluding slide layouts and slide masters. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current presentation. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns all drawing objects from the presentation slides, excluding slide layouts and slide masters. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns an array with all the image objects from the presentation slides, excluding slide layouts and slide masters. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns an array with all the OLE objects from the presentation slides, excluding slide layouts and slide masters. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns an array with all the shape objects from the presentation slides, excluding slide layouts and slide masters. |
| [GetAllSlideMasters](./Methods/GetAllSlideMasters.md) | [ApiMaster](../ApiMaster/ApiMaster.md)[] | Returns an array of all slide masters from the current presentation. |
| [GetAllSlides](./Methods/GetAllSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | Returns an array of all slides from the current presentation. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns an array with all tables from the presentation slides, excluding slide layouts and slide masters. |
| [GetClassType](./Methods/GetClassType.md) | "presentation" | Returns a type of the ApiPresentation class. |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | Returns the core properties interface for the current presentation. |
| [GetCurSlideIndex](./Methods/GetCurSlideIndex.md) | number | Returns the index for the current slide. |
| [GetCurrentSentence](./Methods/GetCurrentSentence.md) | string | Returns the current sentence or a part of the current sentence at the cursor. |
| [GetCurrentSlide](./Methods/GetCurrentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null \| undefined | Returns the current slide. |
| [GetCurrentVisibleSlide](./Methods/GetCurrentVisibleSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the current visible slide. |
| [GetCurrentWord](./Methods/GetCurrentWord.md) | string | Returns the current word or a part of the current word at the cursor. |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | Returns the custom properties from the current presentation. |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | Retrieves the custom XML manager associated with the presentation. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: |
| [GetDrawingsByName](./Methods/GetDrawingsByName.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns a collection of drawing objects from the presentation slides filtered by their names, excluding drawing objects from slide layouts and slide masters. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation height in English measure units. |
| [GetLoopUntilStopped](./Methods/GetLoopUntilStopped.md) | boolean | Returns whether the presentation loops continuously until the user stops it. |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns a slide master by its position in the presentation. |
| [GetMastersCount](./Methods/GetMastersCount.md) | number | Returns a number of slide masters. |
| [GetSelection](./Methods/GetSelection.md) | [ApiSelection](../ApiSelection/ApiSelection.md) | Returns the selection from the current presentation. |
| [GetSlideByIndex](./Methods/GetSlideByIndex.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null \| undefined | Returns a slide by its position in the presentation. |
| [GetSlideCount](./Methods/GetSlideCount.md) | number | Returns a number of slides. |
| [GetSlidesCount](./Methods/GetSlidesCount.md) | number | Returns a number of slides. |
| [GetStyle](./Methods/GetStyle.md) | [ApiStyle](../ApiStyle/ApiStyle.md) \| null | Returns the presentation style by its name. |
| [GetVisitor](./Methods/GetVisitor.md) | [ApiPresentationVisitor](../ApiPresentationVisitor/ApiPresentationVisitor.md) | Returns a visitor object for traversing the slides, layouts, masters, speaker notes, drawings and text of the presentation. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation width in English measure units. |
| [InsertFromFile](./Methods/InsertFromFile.md) | number | Inserts slides from the specified file into the current presentation. |
| [InsertParagraphBreak](./Methods/InsertParagraphBreak.md) | boolean | Add paragraph to the document on the cursor position. |
| [MoveCursorDown](./Methods/MoveCursorDown.md) | boolean | Moves the cursor down. |
| [MoveCursorLeft](./Methods/MoveCursorLeft.md) | boolean | Moves the cursor to the left. |
| [MoveCursorRight](./Methods/MoveCursorRight.md) | boolean | Moves the cursor to the right. |
| [MoveCursorUp](./Methods/MoveCursorUp.md) | boolean | Moves the cursor up. |
| [MoveToNextCell](./Methods/MoveToNextCell.md) | boolean | Moves the cursor to the next table cell. |
| [MoveToPrevCell](./Methods/MoveToPrevCell.md) | boolean | Moves the cursor to the previous table cell. |
| [RemoveSlide](./Methods/RemoveSlide.md) | boolean | Removes a slide at the specified position from the presentation. |
| [RemoveSlides](./Methods/RemoveSlides.md) | boolean | Removes a range of slides from the presentation. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with an image specified. |
| [ReplaceCurrentSentence](./Methods/ReplaceCurrentSentence.md) | boolean | Replaces the current sentence or a part of the current sentence at the cursor with the specified text. If there is no sentence at the cursor, for example, in an empty paragraph, the specified text is inserted at the cursor position. |
| [ReplaceCurrentWord](./Methods/ReplaceCurrentWord.md) | boolean | Replaces the current word or a part of the current word at the cursor with the specified text. |
| [Search](./Methods/Search.md) | [ApiTextRange](../ApiTextRange/ApiTextRange.md)[] | Searches for the specified text in the presentation and returns all found occurrences as text ranges. |
| [SearchAndReplace](./Methods/SearchAndReplace.md) | boolean | Finds and replaces the text in the presentation. |
| [SelectCurrentSentence](./Methods/SelectCurrentSentence.md) | boolean | Selects the sentence at the cursor. The current text selection, if any, is removed first. |
| [SelectCurrentWord](./Methods/SelectCurrentWord.md) | boolean | Selects the word at the cursor. The current text selection, if any, is removed first. |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | Specifies the languages which will be used to check spelling and grammar (if requested). |
| [SetLoopUntilStopped](./Methods/SetLoopUntilStopped.md) | boolean | Sets whether the presentation loops continuously until the user stops it. |
| [SetSizes](./Methods/SetSizes.md) | None | Sets the size to the current presentation. |
| [SlidesToJSON](./Methods/SlidesToJSON.md) | JSON \| null | Converts the slides from the current ApiPresentation object into the JSON objects. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiPresentation object into the JSON object. |
