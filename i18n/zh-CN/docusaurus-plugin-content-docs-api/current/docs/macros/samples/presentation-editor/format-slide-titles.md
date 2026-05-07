---
hide_table_of_contents: true
---

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

使用方法: [SetFontFamily](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize), [SetJc](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes), [SetVerticalTextAlign](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent), [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex)

## 结果

![幻灯片标题统一格式](/assets/images/plugins/format-slide-titles.png#gh-light-mode-only)
![幻灯片标题统一格式](/assets/images/plugins/format-slide-titles.dark.png#gh-dark-mode-only)
