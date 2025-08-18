---
hide_table_of_contents: true
---

# Bold bullet points

Automatically **bolds** the first word of each bullet point that contains a colon ( : ) or a dash ( – ).

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slides = presentation.GetAllSlides();

    slides.forEach(slide => {
        let shapes = slide.GetAllShapes();
        shapes.forEach(shape => {
            let docContent = shape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();

            for (let paragraph of paragraphs) {
                let indLeft = paragraph.GetIndLeft();
                if (indLeft !== 0) {
                    let text = paragraph.GetText();
                   let match = text.match(/^(\s*\S+\s*[:–\-])/);
                    if (match) {
                        let boldTextStr = match[1];
                        let restText = text.substring(boldTextStr.length);

                        paragraph.RemoveAllElements();
                        let boldPart = paragraph.AddText(boldTextStr);
                        boldPart.SetBold(true);
                        if (restText) paragraph.AddText(restText);
                    }
                }
            }
        });
    });
})();
```

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetIndLeft](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md), [GetElementsCount](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetElementsCount.md), [RemoveAllElements](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetBold](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md)

## Result

![BoldBulletPoints](/assets/images/plugins/bold-bullet-points.png#gh-light-mode-only)
![BoldBulletPoints](/assets/images/plugins/bold-bullet-points.dark.png#gh-dark-mode-only)
