---
hide_table_of_contents: true
---

# Split slides

Splits slides in a presentation that contain more than 100 words into multiple slides.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let maxWordsPerSlide = 100;
    let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
    let shapeWidth = 300 * 36000;
    let shapeHeight = 130 * 36000;
    let slideCount = presentation.GetSlidesCount();
    let slideIndex = 0;

    while (slideIndex < slideCount) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllShapes();

        let allText = extractAllTextFromSlide(shapes);
        let allWords = allText.trim().split(/\s+/);
        let totalWords = allWords.length;

        if (totalWords > maxWordsPerSlide) {
            presentation.RemoveSlides(slideIndex, 1);
            let sections = createWordSections(allWords, maxWordsPerSlide);

            for (let i = 0; i < sections.length; i++) {
                let newSlide = Api.CreateSlide();

                presentation.AddSlide(newSlide, slideIndex + i);
                createTextShape(newSlide, sections[i], fill, shapeWidth, shapeHeight);
            }
        } else {
            slideIndex++;
        }
    }

    function extractAllTextFromSlide(shapes) {
        let text = "";
        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraphs = docContent.GetAllParagraphs();
                paragraphs.forEach(function (paragraph) {
                    let paragraphText = paragraph.GetText();
                    if (paragraphText) {
                        text += paragraphText + " ";
                    }
                });
            }
        });
        return text;
    }

    function createWordSections(words, wordsPerSection) {
        let sections = [];
        for (let i = 0; i < words.length; i += wordsPerSection) {
            let sectionWords = words.slice(i, i + wordsPerSection);
            sections.push(sectionWords.join(" "));
        }
        return sections;
    }

    function createTextShape(slide, text, fill, width, height) {
        let shape = Api.CreateShape("rect", width, height);
        let content = shape.GetDocContent();
        content.RemoveAllElements();

        let paragraph = Api.CreateParagraph();
        paragraph.SetJc("left");

        let run = Api.CreateRun();
        let textPr = run.GetTextPr();
        textPr.SetFontSize(50);
        textPr.SetFill(fill);

        run.AddText(text);
        paragraph.AddElement(run);
        content.Push(paragraph);

        slide.AddObject(shape);
        return shape;
    }
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [CreateSolidFill](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSolidFill.md), [CreateRGBColor](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRGBColor.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [RemoveSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/RemoveSlides.md), [CreateSlide](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [AddSlide](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [CreateShape](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [RemoveAllElements](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [SetJc](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [CreateRun](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRun.md), [GetTextPr](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr.md), [SetFontSize](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize.md), [SetFill](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md), [AddElement](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md), [Push](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## Result

![SplitSlides](/assets/images/plugins/split-slides.png#gh-light-mode-only)
![SplitSlides](/assets/images/plugins/split-slides.dark.png#gh-dark-mode-only)
