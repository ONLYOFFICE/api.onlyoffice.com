# 内容对齐工具

在整个演示文稿中统一对齐文本框和图像。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();

    // 配置（单位为 EMU）
    let leftMargin = 10 * 36000;
    let topMargin = 15 * 36000;
    let verticalSpacing = 5 * 36000;

    for (let i = 0; i < presentation.GetSlidesCount(); i++) {
        let slide = presentation.GetSlideByIndex(i);
        let slideWidth = slide.GetWidth();
        let slideHeight = slide.GetHeight();

        let elements = slide.GetAllDrawings();
        if (!elements || !elements.length) {
            console.log("No items found on this slide");
            continue;
        }

        console.log("Number of items:", elements.length);

        let currentY = topMargin;

        elements.forEach(function (element, index) {
            let elementWidth = element.GetWidth();
            let elementHeight = element.GetHeight();

            element.SetPosition(leftMargin, currentY);
            console.log("Item " + (index + 1) + " placed: X=" + leftMargin + ", Y=" + currentY);

            currentY += elementHeight + verticalSpacing;
        });
    }

    console.log("Placement is complete!");
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetWidth.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/GetHeight.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetWidth](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetWidth.md), [GetHeight](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetHeight.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md)

## 结果

<!-- imgpath -->

![ContentAlignmentTool](/assets/images/plugins/content-alignment-tool.png#gh-light-mode-only)![ContentAlignmentTool](/assets/images/plugins/content-alignment-tool.dark.png#gh-dark-mode-only)
