---
hide_table_of_contents: true
description: Delete a specified bookmark from a document.
tags: ["Docs", "Macros", "Documents"]
---

import Video from '@site/src/components/Video/Video';

# Delete bookmark

Searches for bookmarks containing a specific word in their text and deletes them from the document.

```ts
(function () {
    let textToRemove = "test";
    let caseSensitive = false; // Set this to true to enable case sensitivity
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

Methods used: [GetDocument](../../../office-api/usage-api/document-api/Api/Methods/GetDocument.md), [GetAllBookmarksNames](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetAllBookmarksNames.md), [GetBookmark](../../../office-api/usage-api/document-api/ApiDocument/Methods/GetBookmark.md), [GetText](../../../office-api/usage-api/document-api/ApiBookmark/Methods/GetText.md), [DeleteBookmark](../../../office-api/usage-api/document-api/ApiDocument/Methods/DeleteBookmark.md)

## Result

<Video src="/assets/video/macros/document-editor/delete-bookmark" dark />
