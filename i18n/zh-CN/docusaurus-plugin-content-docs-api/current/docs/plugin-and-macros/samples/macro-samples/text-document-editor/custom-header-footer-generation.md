# 自定义页眉和页脚生成

将预定义的页眉和页脚应用到文档中的所有页面。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let doc = Api.GetDocument();
    let sections = doc.GetSections();

    for (let section of sections) {
        // 删除现有的默认页眉和页脚
        section.RemoveHeader("default");
        section.RemoveFooter("default");

        // 创建新的默认页眉和页脚
        let header = section.GetHeader("default", true);
        let footer = section.GetFooter("default", true);

        // 设置页眉内容
        let headerPara = header.GetElement(0);
        headerPara.AddText("Your Header Text"); // 添加页眉文本
        headerPara.SetJc("center"); // 设置居中对齐

        // 设置页脚内容
        let footerPara = footer.GetElement(0);
        footerPara.AddText("Your Footer Text - Page "); // 添加页脚文本
        footerPara.AddPageNumber(); // 添加页码
        footerPara.SetJc("center"); // 设置居中对齐
    }

    return true;
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetSections](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetSections.md), [RemoveHeader](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/RemoveHeader.md), [RemoveFooter](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/RemoveFooter.md), [GetHeader](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/GetHeader.md), [GetFooter](../../../../office-api/usage-api/text-document-api/ApiSection/Methods/GetFooter.md), [GetElement](../../../../office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [SetJc](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [AddPageNumber](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddPageNumber.md)

## 结果

<!-- imgpath -->

![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.png#gh-light-mode-only)![CustomHeaderFooterGeneration](/assets/images/plugins/custom-header-footer-generation.dark.png#gh-dark-mode-only)