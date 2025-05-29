# Remove extra spaces

Removes extra spaces from all text in all slides of a presentation.

```ts
(function () {
    function removeExtraSpaces(slide) {
        let shapes = slide.GetAllShapes();
        shapes.forEach((shape) => {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraphs = docContent.GetAllParagraphs();
                paragraphs.forEach((paragraph) => {
                    let text = paragraph.GetText();
                    if (text) {
                        let textWithoutWhitespace = text.replace(/\s+/g, " ").trim();
                        paragraph.RemoveAllElements();
                        paragraph.AddText(textWithoutWhitespace);
                    }
                });
            }
        });
    }

    let presentation = Api.GetPresentation();
    let slideCount = presentation.GetSlidesCount();

    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        removeExtraSpaces(slide);
    }
})();
```

Methods used: [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)

## Result

![RemoveExtraSpaces](/assets/images/plugins/remove-extra-spaces-slide.png#gh-light-mode-only)
![RemoveExtraSpaces](/assets/images/plugins/remove-extra-spaces-slide.dark.png#gh-dark-mode-only)
