# 生成演示文稿大纲

根据标题自动生成演示文稿大纲。

```ts
(function()
{
    let presentation = Api.GetPresentation();
    let slides = presentation.GetAllSlides();
    let titles = [];
    
    slides.forEach(slide => {
        let titleShapes = slide.GetDrawingsByPlaceholderType("title");
        titleShapes.forEach(titleShape => {
            let docContent = titleShape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            for (let paragraph of paragraphs) {
                titles.push(paragraph.GetText());
            }
        });
    });
    
    let slide = Api.CreateSlide();
    let shape = Api.CreateShape("rect", 100 * 36000, 50 * 36000);
    shape.SetPosition(608400, 1267200);
    
    let outlineTitle = Api.CreateParagraph();
    let outline = Api.CreateParagraph();
    outlineTitle.AddText("Outline");
    
    for (let title of titles) {
        outline.AddText(title);
    }

    outline.SetColor(0, 0, 0);
    outlineTitle.SetFontSize(48);
    outlineTitle.SetBold(true);
    outlineTitle.SetColor(0, 0, 0);
    
    let content = shape.GetDocContent();
    content.Push(outlineTitle);
    content.Push(outline);
    slide.AddObject(shape);
    presentation.AddSlide(slide);
})();
```

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取所有幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md)，[按占位符类型获取图形](/docs/office-api/usage-api/presentation-api/ApiMaster/Methods/GetDrawingsByPlaceholderType.md)，[获取文档内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md)，[创建幻灯片](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md)，[创建形状](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateShape.md)，[设置位置](/docs/office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md)，[创建段落](/docs/office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md)，[添加文本](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md)，[设置颜色](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md)，[设置字号](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md)，[设置加粗](/docs/office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md)，[推送元素](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md)，[添加对象](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)，[添加幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## 结果

![生成演示文稿大纲](/assets/images/plugins/generate-outline.png#gh-light-mode-only)
![生成演示文稿大纲](/assets/images/plugins/generate-outline.dark.png#gh-dark-mode-only)
