---
hide_table_of_contents: true
description: Format bullet point styles on presentation slides.
tags: ["Docs", "Macros", "Presentations"]
---

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

Methods used: [GetPresentation](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateBullet](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateBullet.md), [GetSlideByIndex](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetParaPr](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](/docs/office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md), [SetBullet](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [SetHighlight](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetHighlight.md)

## Result

<video className="light-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/format-bullet-points.webm" type="video/webm" />
</video>
<video className="dark-video" autoPlay loop muted playsInline controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/presentation-editor/format-bullet-points.dark.webm" type="video/webm" />
</video>
