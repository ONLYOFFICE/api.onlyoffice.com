# 删除幻灯片

根据幻灯片标题删除演示文稿中的指定幻灯片。

```ts
(function () {
    // 设置要查找的关键词
    let keyword = "Presentation";
    // 设置是否区分大小写
    let isCaseInsensitive = true;
    let presentation = Api.GetPresentation();

    // 创建正则表达式（默认不区分大小写）
    let regex = new RegExp(keyword, 'i');
    if (!isCaseInsensitive) {
        regex = new RegExp(keyword);
    }
    // 获取演示文稿所有幻灯片
    let slides = presentation.GetAllSlides();

    slides.forEach(slide => {
        // 获取标题占位符形状
        let titleShapes = slide.GetDrawingsByPlaceholderType("title");
        // 创建终止循环，优化性能的标志位
        let wasSlideDeleted = false;

        titleShapes.forEach(titleShape => {
            // 获取形状中的标题文本内容
            let docContent = titleShape.GetDocContent();
            let paragraphs = docContent.GetAllParagraphs();

            for (let paragraph of paragraphs) {
                let headingText = paragraph.GetText();
                // 如果标题文本包含了或等于关键词，则删除当前幻灯片
                if (regex.test(headingText)) {
                    slide.Delete();
                    wasSlideDeleted = true;
                    break;
                }
            }
            // 如果幻灯片已被删除，则终止循环
            if (wasSlideDeleted) return;
        });
    });
})();
```

使用方法：[获取演示文稿](/docs/office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md)，[获取所有幻灯片](/docs/office-api/usage-api/presentation-api/ApiPresentation/Methods/GetAllSlides.md)，[按占位符类型获取图形](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/GetDrawingsByPlaceholderType.md)，[获取文档内容](/docs/office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md)，[删除幻灯片](/docs/office-api/usage-api/presentation-api/ApiSlide/Methods/Delete.md)

## 结果

![删除幻灯片](/assets/images/plugins/remove-slides.png#gh-light-mode-only)
![删除幻灯片](/assets/images/plugins/remove-slides.dark.png#gh-dark-mode-only)
