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

使用方法：[设置字体](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontFamily.md)，[设置字号](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md)，[设置对齐方式](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md)，[获取所有形状](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)，[设置垂直文本对齐](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/SetVerticalTextAlign.md)，[获取文本内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md)，[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取幻灯片数量](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md)，[按索引获取幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)

## 结果

![幻灯片标题统一格式](/assets/images/plugins/format-slide-titles.png#gh-light-mode-only)
![幻灯片标题统一格式](/assets/images/plugins/format-slide-titles.dark.png#gh-dark-mode-only)
