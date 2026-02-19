# ApiPresentation

Represents the ApiPresentation class.


## Methods

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [AddMaster](./Methods/AddMaster.md) | boolean | Adds the slide master to the presentation slide masters collection. |
| [AddMathEquation](./Methods/AddMathEquation.md) | boolean | Adds a math equation to the current presentation. |
| [AddSlide](./Methods/AddSlide.md) | None | Appends a new slide to the end of the presentation. |
| [ApplyTheme](./Methods/ApplyTheme.md) | boolean | Applies a theme to all the slides in the presentation. |
| [CreateNewHistoryPoint](./Methods/CreateNewHistoryPoint.md) | None | Creates a new history point. |
| [GetAllCharts](./Methods/GetAllCharts.md) | [ApiChart](../ApiChart/ApiChart.md)[] | Returns an array with all the chart objects from the current presentation. |
| [GetAllComments](./Methods/GetAllComments.md) | [ApiComment](../ApiComment/ApiComment.md)[] | Returns all comments from the current presentation. |
| [GetAllDrawings](./Methods/GetAllDrawings.md) | [Drawing](../Enumeration/Drawing.md)[] | Returns an array with all the drawing objects from the current presentation. |
| [GetAllImages](./Methods/GetAllImages.md) | [ApiImage](../ApiImage/ApiImage.md)[] | Returns an array with all the image objects from the current presentation. |
| [GetAllOleObjects](./Methods/GetAllOleObjects.md) | [ApiOleObject](../ApiOleObject/ApiOleObject.md)[] | Returns an array with all the OLE objects from the current presentation. |
| [GetAllShapes](./Methods/GetAllShapes.md) | [ApiShape](../ApiShape/ApiShape.md)[] | Returns an array with all the shape objects from the current presentation. |
| [GetAllSlideMasters](./Methods/GetAllSlideMasters.md) | [ApiMaster](../ApiMaster/ApiMaster.md)[] | Returns an array of all slide masters from the current presentation. |
| [GetAllSlides](./Methods/GetAllSlides.md) | [ApiSlide](../ApiSlide/ApiSlide.md)[] | Returns an array of all slides from the current presentation. |
| [GetAllTables](./Methods/GetAllTables.md) | [ApiTable](../ApiTable/ApiTable.md)[] | Returns an array with all tables from the current presentation (including slide masters and slide layouts). |
| [GetClassType](./Methods/GetClassType.md) | "presentation" | Returns a type of the ApiPresentation class. |
| [GetCore](./Methods/GetCore.md) | [ApiCore](../ApiCore/ApiCore.md) | Returns the core properties interface for the current presentation. This method is used to view or modify standard metadata such as title, author, and keywords. |
| [GetCurSlideIndex](./Methods/GetCurSlideIndex.md) | number | Returns the index for the current slide. |
| [GetCurrentSlide](./Methods/GetCurrentSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Returns the current slide. |
| [GetCurrentVisibleSlide](./Methods/GetCurrentVisibleSlide.md) | [ApiSlide](../ApiSlide/ApiSlide.md) \| null | Returns the current visible slide. |
| [GetCustomProperties](./Methods/GetCustomProperties.md) | [ApiCustomProperties](../ApiCustomProperties/ApiCustomProperties.md) | Returns the custom properties from the current presentation. |
| [GetCustomXmlParts](./Methods/GetCustomXmlParts.md) | [ApiCustomXmlParts](../ApiCustomXmlParts/ApiCustomXmlParts.md) \| null | Retrieves the custom XML manager associated with the presentation. This manager allows manipulation and access to custom XML parts within the presentation. |
| [GetDocumentInfo](./Methods/GetDocumentInfo.md) | object | Returns the document information: **Application** - the application the document has been created with. **CreatedRaw** - the date and time when the file was created. **Created** - the parsed date and time when the file was created. **LastModifiedRaw** - the date and time when the file was last modified. **LastModified** - the parsed date and time when the file was last modified. **LastModifiedBy** - the name of the user who has made the latest change to the document. **Authors** - the persons who has created the file. **Title** - this property allows you to simplify your documents classification. **Tags** - this property allows you to simplify your documents classification. **Subject** - this property allows you to simplify your documents classification. **Comment** - this property allows you to simplify your documents classification. |
| [GetHeight](./Methods/GetHeight.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation height in English measure units. |
| [GetLoopUntilStopped](./Methods/GetLoopUntilStopped.md) | boolean | Returns whether the presentation loops continuously until the user stops it. |
| [GetMaster](./Methods/GetMaster.md) | [ApiMaster](../ApiMaster/ApiMaster.md) \| null | Returns a slide master by its position in the presentation. |
| [GetMastersCount](./Methods/GetMastersCount.md) | number | Returns a number of slide masters. |
| [GetSlideByIndex](./Methods/GetSlideByIndex.md) | [ApiSlide](../ApiSlide/ApiSlide.md) | Returns a slide by its position in the presentation. |
| [GetSlidesCount](./Methods/GetSlidesCount.md) | number | Returns a number of slides. |
| [GetWidth](./Methods/GetWidth.md) | [EMU](../Enumeration/EMU.md) | Returns the presentation width in English measure units. |
| [RemoveSlides](./Methods/RemoveSlides.md) | boolean | Removes a range of slides from the presentation. Deletes all the slides from the presentation if no parameters are specified. |
| [ReplaceCurrentImage](./Methods/ReplaceCurrentImage.md) | None | Replaces the current image with an image specified. |
| [SetLanguage](./Methods/SetLanguage.md) | boolean | Specifies the languages which will be used to check spelling and grammar (if requested). |
| [SetLoopUntilStopped](./Methods/SetLoopUntilStopped.md) | boolean | Sets whether the presentation loops continuously until the user stops it. |
| [SetSizes](./Methods/SetSizes.md) | None | Sets the size to the current presentation. |
| [SlidesToJSON](./Methods/SlidesToJSON.md) | JSON[] | Converts the slides from the current ApiPresentation object into the JSON objects. |
| [ToJSON](./Methods/ToJSON.md) | JSON | Converts the ApiPresentation object into the JSON object. |
