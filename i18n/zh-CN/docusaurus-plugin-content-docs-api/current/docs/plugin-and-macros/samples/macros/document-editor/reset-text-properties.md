---
hide_table_of_contents: true
---

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

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [CreateTextPr](../../../../office-api/usage-api/document-api/Api/Methods/CreateTextPr.md), [SetFontSize](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetFontSize.md), [SetFontFamily](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetFontFamily.md), [SetBold](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetBold.md), [SetItalic](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetItalic.md), [SetHighlight](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetHighlight.md), [SetColor](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetColor.md), [SetUnderline](../../../../office-api/usage-api/document-api/ApiTextPr/Methods/SetUnderline.md), [GetAllParagraphs](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllParagraphs.md), [SetTextPr](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/SetTextPr.md)

## 结果

![重置文本属性](/assets/images/plugins/reset-text-properties.png#gh-light-mode-only)
![重置文本属性](/assets/images/plugins/reset-text-properties.dark.png#gh-dark-mode-only)
