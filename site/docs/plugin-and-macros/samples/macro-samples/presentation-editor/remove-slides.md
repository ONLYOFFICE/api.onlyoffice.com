# Remove slides

Remove slides from your presentation based on the slide title.

```ts
(function () {
    // Set a specific word
    let keyword = "Presentation";
    // Create a flag for case sensitivity
    let isCaseInsensitive = true;
    let presentation = Api.GetPresentation();

    // Define regular expression with a search word including case sensitivity
    let regex = new RegExp(keyword, 'i');
    if (!isCaseInsensitive) {
        regex = new RegExp(keyword);
    }
    // Get all slides from a presentation
    let slides = presentation.GetAllSlides();

    slides.forEach(slide => {
        // Get all drawings with a title placeholder type
        let titleShapes = slide.GetDrawingsByPlaceholderType("title");
        // Create a flag to break a cycle for a better performance
        let wasSlideDeleted = false;

        titleShapes.forEach(titleShape => {
            // Get all paragraphs from a title shape
            let docContent = titleShape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();

            for (let paragraph of paragraphs) {
                let headingText = paragraph.GetText();
                // If a heading text contains or equals to a keyword delete the current slide
                if (regex.test(headingText)) {
                    slide.Delete();
                    wasSlideDeleted = true;
                    break;
                }
            }
            // If the slide was deleted continue, do not iterate through all shapes
            if (wasSlideDeleted) return;
        });
    });
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetDrawingsByPlaceholderType](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetDrawingsByPlaceholderType.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [Delete](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md)

## Result

![RemoveSlides](/assets/images/plugins/remove-slides.png#gh-light-mode-only)
![RemoveSlides](/assets/images/plugins/remove-slides.dark.png#gh-dark-mode-only)
