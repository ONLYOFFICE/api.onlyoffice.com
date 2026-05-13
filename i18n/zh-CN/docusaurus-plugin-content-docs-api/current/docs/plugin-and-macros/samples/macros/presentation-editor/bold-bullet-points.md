---
hide_table_of_contents: true
---

# 加粗项目符号

自动将包含冒号（:）或破折号（——）的项目符号首单词**加粗**。

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

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetAllParagraphs.md), [GetIndLeft](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md), GetText, [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetBold](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md)

## 结果

![加粗项目符号](/assets/images/plugins/bold-bullet-points.png#gh-light-mode-only)
![加粗项目符号](/assets/images/plugins/bold-bullet-points.dark.png#gh-dark-mode-only)
