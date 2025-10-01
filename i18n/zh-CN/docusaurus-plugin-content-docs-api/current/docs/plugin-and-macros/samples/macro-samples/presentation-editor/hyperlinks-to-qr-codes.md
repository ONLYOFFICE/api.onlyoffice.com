# 将超链接转换为二维码

使用外部 API 将演示文稿中的所有超链接转换为二维码。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let presentation = Api.GetPresentation();
    let slideCount = presentation.GetSlidesCount();
    let urlPattern = /https?:\/\/\S+/g;

    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
        let slide = presentation.GetSlideByIndex(slideIndex);
        let shapes = slide.GetAllShapes();
        let processedUrls = new Set(); // 记录当前幻灯片中已处理的 URL

        shapes.forEach(function (shape) {
            let docContent = shape.GetDocContent();
            if (docContent) {
                let paragraphs = docContent.GetAllParagraphs();
                paragraphs.forEach(function (paragraph) {
                    let text = paragraph.GetText();
                    if (text) {
                        let match;
                        while ((match = urlPattern.exec(text)) !== null) {
                            let url = match[0].replace(/[.,;!?)]+$/, "");
                            if (!processedUrls.has(url)) {
                                processedUrls.add(url);
                                console.log("Processing URL: " + url);

                                // 将 URL 编码后用于 API 请求
                                let encodedUrl = encodeURIComponent(url);
                                let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedUrl}&size=200x200`;

                                // 使用 API 返回的 URL 创建图像对象
                                let image = Api.CreateOleObject(apiUrl, 200 * 3600, 200 * 3600);
                                // 调整大小
                                image.SetSize(200 * 3600, 200 * 3600);
                                // 设置图片在幻灯片上的位置和大小
                                image.SetPosition(608400, 1267200); // 根据需要调整位置

                                // 将图片添加到幻灯片中
                                slide.AddObject(image);
                            }
                        }
                        // 重置正则表达式的 lastIndex，以便下一个段落使用
                        urlPattern.lastIndex = 0;
                    }
                });
            }
        });
    }

    console.log("Macro execution completed.");
})();
```

使用方法: [GetPresentation](../../../../office-api/usage-api/presentation-api/Api/Methods/GetPresentation.md), [GetSlidesCount](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlidesCount.md), [GetSlideByIndex](../../../../office-api/usage-api/presentation-api/ApiPresentation/Methods/GetSlideByIndex.md), [GetAllShapes](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/GetAllShapes.md), [GetDocContent](../../../../office-api/usage-api/presentation-api/ApiShape/Methods/GetDocContent.md), [CreateOleObject](../../../../office-api/usage-api/presentation-api/Api/Methods/CreateOleObject.md), [SetSize](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetSize.md), [SetPosition](../../../../office-api/usage-api/presentation-api/ApiDrawing/Methods/SetPosition.md), [AddObject](../../../../office-api/usage-api/presentation-api/ApiSlide/Methods/AddObject.md)

## 结果

<!-- imgpath -->

![Hyperlinks to QR codes](/assets/images/plugins/hyperlinks-to-qr-codes.png#gh-light-mode-only)![Hyperlinks to QR codes](/assets/images/plugins/hyperlinks-to-qr-codes.dark.png#gh-dark-mode-only)
