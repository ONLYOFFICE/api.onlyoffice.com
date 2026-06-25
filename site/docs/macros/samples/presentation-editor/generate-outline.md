---
hide_table_of_contents: true
description: Generate a presentation outline from slide titles.
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# Generate outline

Automatically generates a presentation outline based on titles.

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

Methods used: [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetAllSlides](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md), [GetDrawingsByPlaceholderType](../../../office-api/usage-api/presentation-api/ApiMaster/Methods/GetDrawingsByPlaceholderType.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [CreateSlide](../../../office-api/usage-api/presentation-api/Api/Methods/CreateSlide.md), [CreateShape](../../../office-api/usage-api/presentation-api/Api/Methods/CreateShape.md), [SetPosition](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [CreateParagraph](../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [SetColor](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetColor.md), [SetFontSize](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetFontSize.md), [SetBold](../../../office-api/usage-api/presentation-api/ApiRun/Methods/SetBold.md), [Push](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md), [AddObject](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md), [AddSlide](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/AddSlide.md)

## Result

<Video src="/assets/video/macros/presentation-editor/generate-outline" dark />
