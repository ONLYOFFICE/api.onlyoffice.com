---
hide_table_of_contents: true
description: 格式化演示文稿幻灯片上的项目符号样式。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 格式化项目符号

为项目符号设定一致的格式设置。

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slideCount = presentation.GetSlidesCount();
    let bullet = Api.CreateBullet("-");

    for (let i = 0; i < slideCount; i++) {
        let slide = presentation.GetSlideByIndex(i);
        let shapes = slide.GetAllShapes();

        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();
            paragraphs.forEach(function (paragraph) {
                let paragraphProperties = paragraph.GetParaPr();
                let indentLeft = paragraphProperties.GetIndLeft();

                if (indentLeft !== 0) {
                    paragraph.SetBullet(bullet);
                    paragraph.SetHighlight("white");
                }
            });
        });
    }
})();
```

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [CreateBullet](../../../office-api/usage-api/presentation-api/Api/Methods/CreateBullet.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetParaPr](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [GetIndLeft](../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/GetIndLeft.md), [SetBullet](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetBullet.md), [SetHighlight](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/SetHighlight.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/format-bullet-points" dark />
