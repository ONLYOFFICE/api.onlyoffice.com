# Chart aligner

Align charts and text boxes on every slide.

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slideCount = presentation.GetSlidesCount();
    let bullet = Api.CreateBullet("-");

    for (let i = 0; i < slideCount; i++) {
        let slide = presentation.GetSlideByIndex(i);
        let shapes = slide.GetAllShapes();

        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            paragraphs.forEach(function (paragraph) {
                let paragraphProperties = paragraph.GetParaPr();
                let indentLeft = paragraphProperties.GetIndLeft();

                if (indentLeft !== 0) {
                    paragraph.SetBullet(bullet);
                    paragraph.SetFontSize(24);
                    paragraph.SetFontFamily("Arial");
                    paragraph.SetBold(false);
                    paragraph.SetItalic(false);
                    paragraph.SetHighlight("white");
                    paragraph.SetColor("black");
                    paragraph.SetUnderline(false);
                } else {
                    console.log("Paragraph does not have bullet-like indentation.");
                }
            });
        });
    }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateBullet](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateBullet.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md), [SetBullet](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetFontFamily](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md), [SetBold](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetItalic.md), [SetHighlight](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetHighlight.md), [SetColor](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md), [SetUnderline](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetUnderline.md)

## Result

![ChartAligner](/assets/images/plugins/chart-aligner.png#gh-light-mode-only)
![ChartAligner](/assets/images/plugins/chart-aligner.dark.png#gh-dark-mode-only)
