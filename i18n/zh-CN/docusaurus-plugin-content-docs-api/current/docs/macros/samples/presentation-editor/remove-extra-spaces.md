---
hide_table_of_contents: true
description: 删除幻灯片文本中的多余空格。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

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

使用方法： [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [RemoveAllElements](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/remove-extra-spaces" dark />
