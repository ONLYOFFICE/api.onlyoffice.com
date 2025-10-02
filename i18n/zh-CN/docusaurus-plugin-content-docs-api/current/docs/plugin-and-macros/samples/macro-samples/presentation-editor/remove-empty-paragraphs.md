# 删除空段落

删除演示文稿中所有不必要的空白段落。

```ts
(function()
{
    let presentation = Api.GetPresentation();
    let slideNum = presentation.GetSlidesCount();
    
    // 遍历演示文稿中的所有幻灯片
    for (let slideIndex = 0; slideIndex < slideNum; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapeArr = slide.GetAllShapes();
        
        // 遍历当前幻灯片中的所有形状
        for (let shapeIndex = 0; shapeIndex < shapeArr.length; shapeIndex++) {
            let contentShape = shapeArr[shapeIndex].GetDocContent();
            
            if (contentShape) {
                let contentShapeElNum = contentShape.GetElementsCount();
                
                let emptyParIndexArr = []; // 存储空文本元素(段落)的索引
                
                // 检查形状内容中的每个段落是否为空
                for (let contentShapeElIndex = 0; contentShapeElIndex < contentShapeElNum; contentShapeElIndex++) {
                    let contentShapeEl = contentShape.GetElement(contentShapeElIndex);
                    
                    if (contentShapeEl) {
                        let text = contentShapeEl.GetText();
                        
                        // 如果文本为空或仅包含空白字符，记录其索引
                        if (text.trim().length === 0) {
                            emptyParIndexArr.push(contentShapeElIndex); 
                        }
                    }
                }

                // 倒序删除空段落以避免索引偏移
                for (let i = emptyParIndexArr.length - 1; i >= 0; i--) {
                    let indexToDelete = emptyParIndexArr[i];
                    contentShape.GetElement(indexToDelete).Delete();
                }
            }
        }
    }
})();
```

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取幻灯片数量](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md)，[按索引获取幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md)，[获取所有形状](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md)，[获取文档内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md)，[获取元素数量](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElementsCount.md)，[获取元素](/docs/office-api/usage-api/presentation-api/ApiDocumentContent/Methods/GetElement.md)，[删除元素](/docs/office-api/usage-api/presentation-api/ApiParagraph/Methods/Delete.md)

## 结果

![删除空段落](/assets/images/plugins/remove-empty-paragraphs.png#gh-light-mode-only)
![删除空段落](/assets/images/plugins/remove-empty-paragraphs.dark.png#gh-dark-mode-only)