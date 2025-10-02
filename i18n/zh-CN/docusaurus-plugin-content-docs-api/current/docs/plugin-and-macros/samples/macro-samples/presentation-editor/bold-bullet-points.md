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

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取所有幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md)，[获取所有形状](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)，[获取文本内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md)，[获取左缩进](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetIndLeft.md)，[获取元素数量](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/GetElementsCount.md)，[移除所有元素](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/RemoveAllElements.md)，[添加文本](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md)，[设置加粗](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md)

## 结果

![加粗项目符号](/assets/images/plugins/bold-bullet-points.png#gh-light-mode-only)
![加粗项目符号](/assets/images/plugins/bold-bullet-points.dark.png#gh-dark-mode-only)
