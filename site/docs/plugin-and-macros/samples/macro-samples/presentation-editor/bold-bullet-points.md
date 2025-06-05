# Bold bullet points

Automatically **bold** the first word for each bullet point that contains a colon ( : ) or a dash ( – ).

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
                    let count = paragraph.GetElementsCount();
                    for (let i = 0; i < count; i++) {
                        let match = text.match(/\b\w*[:–]\w*\b/);
                        if (match) {
                            console.log(paragraph.GetElement(i).GetText());
                            let beforeMatch = text.substring(0, match.index);
                            console.log(beforeMatch);
                            let matchedText = match[0];
                            console.log(matchedText);
                            let afterMatch = text.substring(match.index + matchedText.length);
                            paragraph.RemoveAllElements();
                            if (beforeMatch) paragraph.AddText(beforeMatch);
                            let boldText = paragraph.AddText(matchedText);
                            boldText.SetBold(true);
                            if (afterMatch) paragraph.AddText(afterMatch);
                            break;
                        }
                    }
                }
            }
        });
    });
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md), [GetText](../../../../office-api/usage-api/presentation-api/ApiComment/Methods/GetText.md), [GetElementsCount](../../../../office-api/usage-api/presentation-api/ApiHyperlink/Methods/GetElementsCount.md), [GetElement](../../../../office-api/usage-api/presentation-api/ApiHyperlink/Methods/GetElement.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md)

## Result

![BoldBulletPoints](/assets/images/plugins/bold-bullet-points.png#gh-light-mode-only)
![BoldBulletPoints](/assets/images/plugins/bold-bullet-points.dark.png#gh-dark-mode-only)
