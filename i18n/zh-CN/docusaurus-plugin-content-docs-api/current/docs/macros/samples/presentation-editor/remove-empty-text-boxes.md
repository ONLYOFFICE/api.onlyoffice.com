---
hide_table_of_contents: true
description: 删除幻灯片中的空文本框。
tags: ["Docs", "Macros", "Presentations"]
---

import Video from '@site/src/components/Video/Video';

# 删除空文本框

删除演示文稿中所有空的文本框形状。

```ts
(function()
{
    let presentation = Api.GetPresentation();
    let slideNum = presentation.GetSlidesCount();
    
    // 遍历演示文稿中所有幻灯片
    for (let slideIndex = 0; slideIndex < slideNum; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapeArr = slide.GetAllShapes();
        
        // 遍历当前幻灯片中所有形状
        for (let shapeIndex = 0; shapeIndex < shapeArr.length; shapeIndex++) {
            let contentShape = shapeArr[shapeIndex].GetDocContent();
            
            if (contentShape) {
                let contentShapeElNum = contentShape.GetElementsCount();
                
                let emptyParNum = 0; // 空段落计数器
                
                // 遍历形状中所有文本元素(段落)统计空段落
                for (let contentShapeElIndex = 0; contentShapeElIndex < contentShapeElNum; contentShapeElIndex++) {
                    let contentShapeEl = contentShape.GetElement(contentShapeElIndex);
                    
                    if (contentShapeEl) {
                        let text = contentShapeEl.GetText();
                        
                        // 检查文本是否为空或仅包含空白字符
                        if (text.trim().length === 0) {
                            emptyParNum++; 
                        }
                    }
                }
                
                // 如果形状中所有段落都为空，则删除整个形状
                if (emptyParNum === contentShapeElNum) {
                    shapeArr[shapeIndex].Delete();
                }
            }
        }
    }
})();
```

使用方法： [GetPresentation](../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [GetElementsCount](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md), [GetElement](../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md), [Delete](../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/Delete.md)

## 结果

<Video src="/assets/video/macros/presentation-editor/remove-empty-text-boxes" dark />
