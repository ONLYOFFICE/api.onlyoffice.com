# 插入文本

在文档当前光标位置插入文本。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

``` ts
(function()
{
    let doc = Api.GetDocument();
    let paragraph = Api.CreateParagraph();
    paragraph.AddText("Hello world!");
    doc.InsertContent([paragraph]);
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [CreateParagraph](../../../../office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [AddText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [InsertContent](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/InsertContent.md)

## 结果

![Insert text](/assets/images/plugins/macro-window.png#gh-light-mode-only)![Insert text](/assets/images/plugins/macro-window.dark.png#gh-dark-mode-only)
