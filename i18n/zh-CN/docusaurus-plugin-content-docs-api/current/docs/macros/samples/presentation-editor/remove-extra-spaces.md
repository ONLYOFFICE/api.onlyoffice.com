---
hide_table_of_contents: true
---

# 删除多余空格

删除演示文稿所有幻灯片文本中的多余空格。

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

使用方法: [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText), [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex)

## 结果

![删除多余空格](/assets/images/plugins/remove-extra-spaces-slide.png#gh-light-mode-only)
![删除多余空格](/assets/images/plugins/remove-extra-spaces-slide.dark.png#gh-dark-mode-only)
