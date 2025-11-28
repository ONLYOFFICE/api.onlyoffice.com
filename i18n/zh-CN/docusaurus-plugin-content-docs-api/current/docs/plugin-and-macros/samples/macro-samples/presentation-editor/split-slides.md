# # 拆分幻灯片

将包含超过 100 个单词的幻灯片拆分为多张幻灯片。

```ts
(function () {
    let presentation = Api.GetPresentation();
    let maxWordsPerSlide = 100;
    let fill = Api.CreateSolidFill(Api.CreateRGBColor(51, 51, 51));
    let shapeWidth = 300 * 36000;
    let shapeHeight = 130 * 36000;
    let slideCount = presentation.GetSlidesCount();
    let slideIndex = 0;

    while (slideIndex < slideCount) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllShapes();

        let allText = extractAllTextFromSlide(shapes);
        let allWords = allText.trim().split(/\s+/);
        let totalWords = allWords.length;

        if (totalWords > maxWordsPerSlide) {
            presentation.RemoveSlides(slideIndex, 1);
            let sections = createWordSections(allWords, maxWordsPerSlide);

            for (let i = 0; i < sections.length; i++) {
                let newSlide = Api.CreateSlide();

                presentation.AddSlide(newSlide, slideIndex + i);
                createTextShape(newSlide, sections[i], fill, shapeWidth, shapeHeight);
            }
        } else {
            slideIndex++;
        }
    }

    function extractAllTextFromSlide(shapes) {
        let text = "";
        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraphs = docContent.GetAllParagraphs();
                paragraphs.forEach(function (paragraph) {
                    let paragraphText = paragraph.GetText();
                    if (paragraphText) {
                        text += paragraphText + " ";
                    }
                });
            }
        });
        return text;
    }

    function createWordSections(words, wordsPerSection) {
        let sections = [];
        for (let i = 0; i < words.length; i += wordsPerSection) {
            let sectionWords = words.slice(i, i + wordsPerSection);
            sections.push(sectionWords.join(" "));
        }
        return sections;
    }

    function createTextShape(slide, text, fill, width, height) {
        let shape = Api.CreateShape("rect", width, height);
        let content = shape.GetDocContent();
        content.RemoveAllElements();

        let paragraph = Api.CreateParagraph();
        paragraph.SetJc("left");

        let run = Api.CreateRun();
        let textPr = run.GetTextPr();
        textPr.SetFontSize(50);
        textPr.SetFill(fill);

        run.AddText(text);
        paragraph.AddElement(run);
        content.Push(paragraph);

        slide.AddObject(shape);
        return shape;
    }
})();
```

使用方法：[创建段落](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [设置对齐方式](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/SetJc.md), [创建文本块](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateRun.md), [获取文本属性](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/GetTextPr.md), [设置字体大小](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFontSize.md), [设置填充](/docs/office-api/usage-api/presentation-api/ApiTextPr/Methods/SetFill.md), [添加文本](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/AddText.md), [添加元素](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddElement.md), [推送内容](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md),  [添加对象](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## 结果

![拆分幻灯片](/assets/images/plugins/split-slides.png#gh-light-mode-only)
![拆分幻灯片](/assets/images/plugins/split-slides.dark.png#gh-dark-mode-only)
