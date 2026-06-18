---
hide_table_of_contents: true
description: 为文档中最后查看的位置添加书签。
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# 书签标记最后浏览位置

在第一个可见页面添加书签以保存当前阅读位置，并替换该页面的已有书签。

```ts
(function () {
    let doc = Api.GetDocument();
    let visiblePages = doc.GetCurrentVisiblePages();

    if (!visiblePages || visiblePages.length === 0) {
        console.log("No visible pages found.");
        return;
    }

    let targetPageIndex = visiblePages[0];
    doc.GoToPage(targetPageIndex);
    let targetParagraph = doc.GetCurrentParagraph();

    if (!targetParagraph) {
        console.log("Could not get paragraph on page index: " + targetPageIndex);
        return;
    }
    let bookmarkName = "CurrentBookmarkForPage" + (targetPageIndex + 1);
    let existingBookmarks = doc.GetAllBookmarksNames();
    if (existingBookmarks && existingBookmarks.indexOf(bookmarkName) !== -1) {
        doc.DeleteBookmark(bookmarkName);
        console.log("Removed existing bookmark: " + bookmarkName);
    }
    let range = targetParagraph.GetRange();
    range.AddBookmark(bookmarkName);
})();
```

使用方法： [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentVisiblePages](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentVisiblePages.md), [GoToPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GoToPage.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [GetAllBookmarksNames](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [DeleteBookmark](../../../office-api/usage-api/document-api/ApiDocument/Methods/DeleteBookmark.md), [GetRange](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../office-api/usage-api/document-api/ApiRange/Methods/AddBookmark.md)

## 结果

<Video src="/assets/video/macros/document-editor/bookmark-last-view" dark />
