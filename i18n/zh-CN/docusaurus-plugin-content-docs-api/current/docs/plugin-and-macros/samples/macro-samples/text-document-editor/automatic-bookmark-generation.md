# 自动生成书签

自动为文档中的所有标题段落生成书签，并使用标题文本作为书签名称。

<!-- This code snippet is shown in the screenshot. -->

<!-- eslint-skip -->

```ts
(function () {
    let doc = Api.GetDocument();
    let headingParagraphs = doc.GetAllHeadingParagraphs();
    let bookmarkCounter = 1;

    headingParagraphs.forEach((paragraph, index) => {
        let headingText = paragraph.GetText().replace(/\s+/g, "_");
        let bookmarkName = `Bookmark_${headingText}_${bookmarkCounter}`;
        let range = paragraph.GetRange();
        range.AddBookmark(bookmarkName);
        bookmarkCounter++;
    });
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](../../../../office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetText.md), [GetRange](../../../../office-api/usage-api/text-document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../../office-api/usage-api/text-document-api/ApiRange/Methods/AddBookmark.md)

## 结果

<!-- imgpath -->

![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.png#gh-light-mode-only)![AutomaticBookmarkGeneration](/assets/images/plugins/automatic-bookmark-generation.dark.png#gh-dark-mode-only)
