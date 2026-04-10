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

使用方法：[获取文档](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md)，[获取所有书签名称](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetAllBookmarksNames.md)，[获取书签对象](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/GetBookmark.md)，[获取书签文本](/docs/office-api/usage-api/text-document-api/ApiBookmark/Methods/GetText.md)，[删除书签](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/DeleteBookmark.md)

## 结果

![删除书签](/assets/images/plugins/delete-bookmark.png#gh-light-mode-only)
![删除书签](/assets/images/plugins/delete-bookmark.dark.png#gh-dark-mode-only)
