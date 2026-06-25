---
hide_table_of_contents: true
description: Bookmark the last viewed position in a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Bookmark last view

Saves the current reading position by adding a bookmark at the first visible page, replacing any existing bookmark for that page.

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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetCurrentVisiblePages](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentVisiblePages.md), [GoToPage](../../../office-api/usage-api/document-api/ApiDocument/Methods/GoToPage.md), [GetCurrentParagraph](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetCurrentParagraph.md), [GetAllBookmarksNames](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [DeleteBookmark](../../../office-api/usage-api/document-api/ApiDocument/Methods/DeleteBookmark.md), [GetRange](../../../office-api/usage-api/document-api/ApiParagraph/Methods/GetRange.md), [AddBookmark](../../../office-api/usage-api/document-api/ApiRange/Methods/AddBookmark.md)

## Result

<Video src="/assets/video/macros/document-editor/bookmark-last-view" dark />
