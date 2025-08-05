# 高亮预设关键词

在文本文档中高亮预设关键词。

```ts
(function () {
    let keywords = ["justo", "test", "lacus", "et"];

    let doc = Api.GetDocument();

    for (let i = 0; i < keywords.length; i++) {
        let searchResults = doc.Search(keywords[i], 0);
        for (let j = 0; j < searchResults.length; j++) {
            searchResults[j].SetHighlight("lightGray");
        }
    }

    console.log("success");
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [Search](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/Search.md), [SetHighlight](../../../../office-api/usage-api/text-document-api/ApiTextPr/Methods/SetHighlight.md)

## 结果

<!-- imgpath -->

![Highlight predifined keywords](/assets/images/plugins/highlight-predefined-keywords.png#gh-light-mode-only)![Highlight predifined keywords](/assets/images/plugins/highlight-predefined-keywords.dark.png#gh-dark-mode-only)