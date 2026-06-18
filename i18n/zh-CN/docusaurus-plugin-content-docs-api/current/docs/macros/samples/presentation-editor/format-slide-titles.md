---
hide_table_of_contents: true
description: 格式化所有幻灯片上的标题文本。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 幻灯片标题统一格式

统一设置演示文稿中所有幻灯片标题的格式，包括字体、字号、对齐方式和垂直对齐方式。

```ts
(function () {
    // 标题格式配置对象
    let titleConfig = {
        font: "Arial",
        fontSize: 100,
        justification: "center",
        textAlignment: "top",
    };

    function applyTitleFormatting(paragraph, config) {
        paragraph.SetFontFamily(config.font);
        paragraph.SetFontSize(config.fontSize);
        paragraph.SetJc(config.justification);
    }

    function formatSlideTitle(slide, config) {
        let shapes = slide.GetAllShapes();
        if (shapes.length > 0) {
            shapes[0].SetVerticalTextAlign(config.textAlignment);
            let docContent = shapes[0].GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            if (paragraphs.length > 0) {
                applyTitleFormatting(paragraphs[0], config);
            }
        }
    }

    function formatTitlesInPresentation() {
        let presentation = Api.GetPresentation();
        let slideCount = presentation.GetSlidesCount();
        for (let i = 0; i < slideCount; i++) {
            let slide = presentation.GetSlideByIndex(i);
            formatSlideTitle(slide, titleConfig);
        }
    }

    formatTitlesInPresentation();
})();
```

使用方法： [SetFontFamily](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetFontFamily.md), [SetFontSize](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetFontSize.md), [SetJc](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [SetVerticalTextAlign](../../../office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetAllParagraphs](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetAllParagraphs.md), [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/format-slide-titles" dark />
