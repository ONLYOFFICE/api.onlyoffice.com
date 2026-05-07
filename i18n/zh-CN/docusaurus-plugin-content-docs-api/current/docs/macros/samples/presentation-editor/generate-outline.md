---
hide_table_of_contents: true
---

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

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation), [GetAllSlides](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides), [GetDrawingsByPlaceholderType](../../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetDrawingsByPlaceholderType), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent), [CreateSlide](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide), [CreateShape](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText), [SetColor](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetColor), [SetFontSize](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize), [SetBold](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject), [AddSlide](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide)

## 结果

![生成演示文稿大纲](/assets/images/plugins/generate-outline.png#gh-light-mode-only)
![生成演示文稿大纲](/assets/images/plugins/generate-outline.dark.png#gh-dark-mode-only)
