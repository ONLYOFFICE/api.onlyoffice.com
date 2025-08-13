# 自动占位符填充

自动将幻灯片中的空文本框填充为占位符内容，并以结构化格式排列文本。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();

    // 样例内容
    let sampleTexts = {
        title: [
            "项目总结",
            "项目介绍",
            "2024 目标",
            "市场分析"
        ],
        content: [
            "• 目标与宗旨\n• 项目范围\n• 时间计划",
            "• 市场调研\n• 目标受众\n• 竞争分析",
            "• 财务数据\n• 风险分析\n• 预算计划",
            "• 战略规划\n• 资源计划\n• 结果目标"
        ]
    };

    function getRandomText(type) {
        let texts = sampleTexts[type];
        return texts[Math.floor(Math.random() * texts.length)];
    }

    for (let slideIndex = 0; slideIndex < presentation.GetSlidesCount(); slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllDrawings();

        console.log("第 " + (slideIndex + 1) + " 张幻灯片正在处理...");

        shapes.forEach(function (shape, shapeIndex) {
            if (shape.GetClassType() === "shape") {
                let docContent = shape.GetDocContent();

                if (docContent) {
                    // 清除现有内容
                    docContent.RemoveAllElements();

                    // 创建一个新段落
                    let paragraph = Api.CreateParagraph();

                    // 使用第一个形状作为标题
                    let newText = getRandomText(shapeIndex === 0 ? 'title' : 'content');

                    // 添加文本
                    paragraph.AddText(newText);

                    // 插入段落
                    docContent.Push(paragraph);

                    console.log("内容已添加:", newText);
                } else {
                    console.log("获取文件内容失败");
                }
            }
        });
    }

    console.log("处理完成！");
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllDrawings](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllDrawings.md), [GetClassType](../../../../office-api/usage-api/presentation-api/ApiRun/Methods/GetClassType.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [RemoveAllElements](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/RemoveAllElements.md), [CreateParagraph](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/presentation-api/ApiParagraph/Methods/AddText.md), [Push](../../../../office-api/usage-api/presentation-api/ApiDocumentContent/Methods/Push.md) 

## 结果

<!-- imgpath -->

![AutoPlaceholder](/assets/images/plugins/auto-placeholder.png#gh-light-mode-only)![AutoPlaceholder](/assets/images/plugins/auto-placeholder.dark.png#gh-dark-mode-only)