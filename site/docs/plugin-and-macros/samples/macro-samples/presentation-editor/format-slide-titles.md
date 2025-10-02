---
hide_table_of_contents: true
---

# Format slide titles

Formats the title of each slide in a presentation. It sets the font, font size, justification, and vertical text alignment for the title.

```ts
(function () {
    // Configuration object for title formatting
    let titleConfig = {
        font: "Arial",
        fontSize: 100,
        justification: "center",
        textAlignment: "top",
    };

    function applyTitleFormatting(paragraph, config) {
        paragraph.SetFontFamily(config.font);
        paragraph.SetFontSize(config.fontSize);
        paragraph.SetJc(config.justification);
    }

    function formatSlideTitle(slide, config) {
        let shapes = slide.GetAllShapes();
        if (shapes.length > 0) {
            shapes[0].SetVerticalTextAlign(config.textAlignment);
            let docContent = shapes[0].GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            if (paragraphs.length > 0) {
                applyTitleFormatting(paragraphs[0], config);
            }
        }
    }

    function formatTitlesInPresentation() {
        let presentation = Api.GetPresentation();
        let slideCount = presentation.GetSlidesCount();
        for (let i = 0; i < slideCount; i++) {
            let slide = presentation.GetSlideByIndex(i);
            formatSlideTitle(slide, titleConfig);
        }
    }

    formatTitlesInPresentation();
})();
```

Methods used: [SetFontFamily](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md), [SetFontSize](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetVerticalTextAlign](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)

## Result

![FormatSlideTitles](/assets/images/plugins/format-slide-titles.png#gh-light-mode-only)
![FormatSlideTitles](/assets/images/plugins/format-slide-titles.dark.png#gh-dark-mode-only)
