# 生成超链接

生成并插入超链接，替代文本形式的 URL。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function()
{
    // 使用正则表达式查找并替换 URL
    let urlRegex = /(https?:\/\/[^\s]+)/g;
    let doc = Api.GetDocument();
    // 获取所有段落以进行更新
    let allParagraphs = doc.GetAllParagraphs();

    allParagraphs.forEach(paragraph => {
        let rawText = paragraph.GetText();
        // 获取文本后清空段落内容
        paragraph.RemoveAllElements();

        // 按 URL 部分拆分文本
        let parts = rawText.split(urlRegex);

        parts.forEach(part => {
            if (urlRegex.test(part)) {
                // 如果匹配正则表达式，添加超链接
                let hyperlinkRun = Api.CreateRun();
                hyperlinkRun.AddText(part);
                paragraph.AddElement(hyperlinkRun);
                hyperlinkRun.AddHyperlink(part);
            } else {
                // 如果不匹配，添加普通文本
                let textRun = Api.CreateRun();
                textRun.AddText(part);
                paragraph.AddElement(textRun);
            }
        });
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [RemoveAllElements](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/RemoveAllElements.md), [CreateRun](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateRun.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddText.md), [AddElement](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddElement.md), [AddHyperlink](../../../../office-api/usage-api/text-document-api/ApiRun/Methods/AddHyperlink.md)

## 结果

<!-- imgpath -->

![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.png#gh-light-mode-only)![Generate Hyperlinks](/assets/images/plugins/generate-hyperlinks.dark.png#gh-dark-mode-only)
