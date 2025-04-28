# Chart Aligner

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

Methods used: [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/GetAllParagraphs.md), [SetBold](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [SetBullet](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [CreateBullet](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateBullet.md), [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [SetHighlight](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetHighlight.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetAllShapes.md), [SetColor](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md), [SetItalic](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetItalic.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [SetUnderline](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetUnderline.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [SetFontFamily](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)

## Result

![ChartAligner](/assets/images/plugins/chart-aligner.png#gh-light-mode-only)
![ChartAligner](/assets/images/plugins/chart-aligner.dark.png#gh-dark-mode-only)
