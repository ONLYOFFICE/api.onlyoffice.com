# Format bullet points

Applies consistent formatting to bullet points.

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
                    paragraph.SetHighlight("white");
                }
            });
        });
    }
})();
```

Methods used: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateBullet](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateBullet.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetParaPr](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md), [SetBullet](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [SetHighlight](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetHighlight.md)

## Result

![BulletPointFormatter](/assets/images/plugins/bullet-point-formatter.png#gh-light-mode-only)
![BulletPointFormatter](/assets/images/plugins/bullet-point-formatter.dark.png#gh-dark-mode-only)
