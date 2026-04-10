# 重置文本属性

将文档中所有段落的文本属性重置为默认设置。

```ts
(function () {
    let doc = Api.GetDocument();

    // 创建包含默认设置的文本属性对象
    let defaultTextPr = Api.CreateTextPr();
    defaultTextPr.SetFontSize(24);
    defaultTextPr.SetFontFamily("Arial");
    defaultTextPr.SetBold(false);
    defaultTextPr.SetItalic(false);
    defaultTextPr.SetHighlight("white");
    defaultTextPr.SetColor("black");
    defaultTextPr.SetUnderline(false);

    let paragraphs = doc.GetAllParagraphs();

    for (let i = 0; i < paragraphs.length; i++) {
        // 应用文本属性
        paragraphs[i].SetTextPr(defaultTextPr);
    }
})();
```

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[创建文本属性](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTextPr.md)，[设置字号](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontSize.md)，[设置字体](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetFontFamily.md)，[设置粗体](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetBold.md)，[设置斜体](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md)，[设置高亮](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md)，[设置颜色](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetColor.md)，[设置下划线](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetUnderline.md)，[获取所有段落](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md)，[设置文本属性](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetTextPr.md)

## 结果

![重置文本属性](/assets/images/plugins/reset-text-properties.png#gh-light-mode-only)
![重置文本属性](/assets/images/plugins/reset-text-properties.dark.png#gh-dark-mode-only)
