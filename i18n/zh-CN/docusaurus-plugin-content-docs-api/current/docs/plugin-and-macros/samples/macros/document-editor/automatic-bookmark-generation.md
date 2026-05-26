---
hide_table_of_contents: true
---

# 自动生成书签

自动为文档中的所有标题段落生成书签，并使用标题文本作为书签名称。

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

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllHeadingParagraphs](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllHeadingParagraphs.md), [GetText](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetText.md), [GetRange](../../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../../office-api/usage-api/document-api/ApiRange/Methods/AddBookmark.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/automatic-bookmark-generation.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/automatic-bookmark-generation.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
