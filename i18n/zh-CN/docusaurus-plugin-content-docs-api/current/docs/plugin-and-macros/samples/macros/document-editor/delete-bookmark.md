---
hide_table_of_contents: true
---

# 删除书签

查找并删除文档中包含特定文本的书签。

```ts
(function () {
    let textToRemove = "test";
    let caseSensitive = false; // 将 caseSensitive 设为 true 以启用大小写敏感
    let doc = Api.GetDocument();
    let bookmarkNames = doc.GetAllBookmarksNames();

    for (let i = 0; i < bookmarkNames.length; i++) {
        let bookmarkName = bookmarkNames[i];
        let bookmark = doc.GetBookmark(bookmarkName);
        let bookmarkText = bookmark.GetText();
        let textToCompare = caseSensitive
            ? bookmarkText
            : bookmarkText.toLowerCase();

        if (textToCompare.includes(textToRemove)) {
            doc.DeleteBookmark(bookmarkName);
        }
    }
})();
```

使用方法: [GetDocument](../../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllBookmarksNames](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [GetBookmark](../../../../office-api/usage-api/document-api/ApiDocument/Methods/GetBookmark.md), [GetText](../../../../office-api/usage-api/document-api/ApiBookmark/Methods/GetText.md), [DeleteBookmark](../../../../office-api/usage-api/document-api/ApiDocument/Methods/DeleteBookmark.md)

## 结果

<video className="light-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/delete-bookmark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
<video className="dark-video" controls style={{maxWidth: '848px'}}>
  <source src="/assets/video/macros/document-editor/delete-bookmark.dark.webm" type="video/webm" />
  您的浏览器不支持HTML5视频.
</video>
