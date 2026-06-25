---
hide_table_of_contents: true
description: 调整所有幻灯片上的段落缩进。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 调整缩进

调整演示文稿中所有段落的首行缩进量。

```ts
(function()
{
    let indentationValue = 720; // 设置段落首行缩进值。0 表示无缩进；大于 0 的值将产生缩进效果。单位为1/1440 英寸。

    if (!isNaN(indentationValue) && indentationValue >= 0) {
        
        let presentation = Api.GetPresentation();
        let slidesNumber = presentation.GetSlidesCount(); // 获取演示文稿总页数
        
        // 遍历每页幻灯片
        for (let slideIndex = 0; slideIndex < slidesNumber; slideIndex++) {
            let slide = presentation.GetSlideByIndex(slideIndex); // 按索引获取幻灯片
            let shapes = slide.GetAllShapes(); // 获取幻灯片上所有形状

            // 遍历幻灯片上的每个形状
            for (let shapeIndex = 0; shapeIndex < shapes.length; shapeIndex++) {
                let content = shapes[shapeIndex].GetDocContent(); // 获取形状中的文本内容
            
                if (content) {
                    let count = content.GetElementsCount(); // 获取形状中的元素（段落）数量
            
                    // 遍历形状中的每个段落
                    for (let elementIndex = 0; elementIndex < count; elementIndex++) {
                        let paragraph = content.GetElement(elementIndex); // 获取段落元素
                        let paraPr = paragraph.GetParaPr();
                        paraPr.SetIndFirstLine(indentationValue);
                    }
                }
            }
        }
    }
})();
```

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [GetParaPr](../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/GetParaPr.md), [SetIndFirstLine](../../../office-api/usage-api/presentation-api/ApiParaPr/Methods/SetIndFirstLine.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/adjust-indentation" dark />
